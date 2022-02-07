import Header from "../../Components/Header";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "../../Sass/MainPage.scss";

function MainPage(data) {
  const dataProper = data.data;
  return (
    <div className="container home">
      <Header />
      <p className="py-3 textMain">
        Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli
      </p>
      <h1 className="titlePage">Mahsulotlar</h1>
      <div className="py-5 d-flex justify-content-center">
        <Link fill="black" color="black" to="/add">
          <span className="addBtn">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </Link>
      </div>
      <Cards data={dataProper} />
      <Footer />
    </div>
  );
}

export default MainPage;
