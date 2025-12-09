import { useEffect, useState } from "react";
import Header from "./componentes/Header/Header";
import { AppContext } from "./componentes/Context/AppContext";
import "./App.css";
import Main from "./componentes/Main/Main";
import Footer from "./componentes/Footer/Footer";
import api from "./dataProvider/api";
import AddCardForm from "./componentes/AddCardForm/AddCardForm";

function App() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await api.getAllCards();
        setCards(data);
      } catch (error) {
        console.error("Error getting cards:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  async function handleDeleteCard(card) {
    try {
      await api.deleteCard(card._id);
      setCards((prev) => prev.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateCard(card) {
    const likeInvertido = !card.like;
    try {
      await api.updateCard(card._id, likeInvertido);
      setCards((prev) =>
        prev.map((c) => (c._id === card._id ? { ...c, like: likeInvertido } : c))
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddCard(newCardData) {
    try {
      const createdCard = await api.createCard(newCardData);

      // Si el backend devuelve la carta completa, la añadimos inmediatamente.
      // Si no incluye los campos esperados (p.ej. `link`/`name`), reobtenemos todas las cartas.
      if (createdCard && (createdCard.link || createdCard.name || createdCard._id)) {
        setCards((prev) => [...prev, createdCard]);
      } else {
        const data = await api.getAllCards();
        setCards(data);
      }

      setShowForm(false); // cerrar formulario al agregar
    } catch (error) {
      console.error("Error adding card:", error);
    }
  }

  return (
    <AppContext.Provider value={{ cards, setCards }}>
      <div className="app">
        <div className="app__content">
          <Header />

          <Main
            cards={cards}
            handleDeleteCard={handleDeleteCard}
            handleUpdateCard={handleUpdateCard}
            onAddButtonClick={() => setShowForm(true)}
          />

          {showForm && <AddCardForm onAddCard={handleAddCard} onClose={() => setShowForm(false)} />}

          {loading && <p className="loading-message">Cargando cartas...</p>}

          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
