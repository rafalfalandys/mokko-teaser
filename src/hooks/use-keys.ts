import { useCallback, useContext, useEffect } from "react";
import Context from "../store/context";
import usePaintings from "./usePaintings";
import { useNavigate } from "react-router-dom";

function useKeys() {
  const { isModalVisible, hideModal } = useContext(Context);
  const { nextSlide, prevSlide } = usePaintings();
  const navigate = useNavigate();

  const arrowHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    },
    [nextSlide, prevSlide]
  );

  const escHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hideModal();
        setTimeout(() => {
          navigate("/");
        }, 300);
      }
    },
    [hideModal, navigate]
  );

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("keydown", escHandler);
      document.addEventListener("keydown", arrowHandler, { once: true });
    }
    if (!isModalVisible) {
      document.removeEventListener("keydown", escHandler);
      document.removeEventListener("keydown", arrowHandler);
    }
  }, [isModalVisible, escHandler, arrowHandler]);
}

export default useKeys;
