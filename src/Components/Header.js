import HeaderWrapper from "../Pages/MainPage/Header/HeaderWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <HeaderWrapper>
      <h2>Furniutr.</h2>
      <FontAwesomeIcon icon={faSearch} />
    </HeaderWrapper>
  );
}

export default Header;
