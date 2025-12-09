import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ cards, handleDeleteCard, handleUpdateCard }) => {
  return (
    <div className="card-container">
      <ul className="card-container__list">
        {cards && cards.length > 0 ? (
          cards.map((card) => (
            <li key={card._id || card.id}>
              <Card
                card={card}
                handleDeleteCard={handleDeleteCard}
                handleUpdateCard={handleUpdateCard}
              />
            </li>
          ))
        ) : (
          <p>No hay tarjetas para mostrar.</p>
        )}
      </ul>
    </div>
  );
};

export default CardContainer;
