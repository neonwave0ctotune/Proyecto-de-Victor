import "./Profile.css";
import OisImage from "../../../images/Ois.webp";

const Profile = ({ onAddButtonClick }) => {
  return (
    <div className="profile site__section">
      <img className="profile__image" src={OisImage} alt="Avatar" />
      <div className="profile__details">
        <h1 className="profile__name">Xavier Perez</h1>
        <button
          aria-label="Edit traveler profile"
          className="profile__edit-btn"
          type="button"
        ></button>
        <p className="profile__bio">PhD in Information Technology</p>
      </div>

      {/* Botón para abrir el formulario */}
      <button
        aria-label="Add new place"
        className="profile__add-place-btn"
        type="button"
        onClick={onAddButtonClick}
      ></button>
    </div>
  );
};

export default Profile;
