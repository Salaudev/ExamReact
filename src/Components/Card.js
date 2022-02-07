import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "../Sass/CardStyle.scss";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Link, useNavigate } from "react-router-dom";
import data from "../Data/data";

function Card(props) {
  const navigate = useNavigate();
  const { imgUrl, title, price, id } = props.item;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="img-actions w-100 ">
        <img src={imgUrl} className="h-100 w-100" alt={title} />

        <div className="actions">
          <Link to="/edit">
            <span>
              <FontAwesomeIcon
                className="edit me-3"
                icon={faPencilAlt}
                onClick={() => {
                  navigate(`edit/${id}`);
                }}
              />
            </span>
          </Link>

          <span>
            <FontAwesomeIcon
              className="delete "
              icon={faTrashAlt}
              onClick={() => {
                console.log(id);
              }}
            />
          </span>
        </div>
      </div>
      <div className="content p-2 py-4">
        <h4>{title}</h4>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}

export default Card;
