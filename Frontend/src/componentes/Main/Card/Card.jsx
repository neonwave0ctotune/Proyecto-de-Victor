import React, { useState } from "react";
import "./Card.css";
import likeInactive from "../../../images/like-inactive.svg";
import likeActive from "../../../images/like-active.svg";
import deleteIcon from "../../../images/delete-icon.svg";

const Card = ({ card, handleDeleteCard, handleUpdateCard }) => {
  const [isLiked, setIsLiked] = useState(card.like || false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    handleUpdateCard({ ...card, like: !isLiked });
  };

  const handleDeleteClick = () => {
    handleDeleteCard(card); // enviamos todo el objeto card
  };

  return (
    <div className="card">
      <img
        src={card.image || card.link}
        alt={card.title || card.name}
        className="card__image"
      />
      <button
        className="card__delete-button"
        onClick={handleDeleteClick}
        style={{ backgroundImage: `url(${deleteIcon})` }}
      />
      <div className="card__description">
        <h2 className="card__title">{card.title || card.name}</h2>
        <button
          className={`card__like-button ${isLiked ? "card__like-button_is-active" : ""}`}
          onClick={handleLikeClick}
          style={{ backgroundImage: `url(${isLiked ? likeActive : likeInactive})` }}
        />
      </div>
    </div>
  );
};

export default Card;
