import "./Main.css";
import Profile from "./Profile/Profile";
import CardContainer from "./CardContainer/CardContainer";

const Main = ({ cards, handleDeleteCard, handleUpdateCard, onAddButtonClick }) => {
  return (
    <main className="main">
      <section className="traveler">
        <Profile onAddButtonClick={onAddButtonClick} />
      </section>

      <section className="gallery">
        <CardContainer
          cards={cards}
          handleDeleteCard={handleDeleteCard}
          handleUpdateCard={handleUpdateCard}
        />
      </section>
    </main>
  );
};

export default Main;
