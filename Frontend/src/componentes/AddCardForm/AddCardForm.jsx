import { useState } from "react";
import "./AddCardForm.css";

const AddCardForm = ({ onAddCard, onClose }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !link) return;

    setSaving(true);

    const newCard = {
      name,
      link,
      like: false,
    };

    await onAddCard(newCard);

    setName("");
    setLink("");
    setSaving(false);
  };

  return (
    <div className="add-card-form-overlay">
      <form className="add-card-form" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={onClose}>
          &times;
        </button>

        <input
          type="text"
          placeholder="Nombre de la carta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="url"
          placeholder="Enlace de la imagen"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit">{saving ? "Guardando..." : "Agregar Carta"}</button>
      </form>
    </div>
  );
};

export default AddCardForm;
