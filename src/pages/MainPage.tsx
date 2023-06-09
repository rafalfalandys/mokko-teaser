import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import Modal from "../components/Modal/Modal";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  return (
    <div className="general-wrapper">
      <Header />
      <Main />
      <Footer />
      <Modal />
    </div>
  );
};

export default MainPage;
