const API_BASE = "https://proyecto-de-victor.onrender.com"; // tu backend en Render

class Api {
  async getAllCards() {
    const res = await fetch(`${API_BASE}/getAllCards`);
    if (!res.ok) throw new Error(`Error fetching cards: ${res.status}`);
    return res.json();
  }

  async createCard(newCard) {
    const res = await fetch(`${API_BASE}/createCard`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    });
    if (!res.ok) throw new Error(`Error creating card: ${res.status}`);
    return res.json();
  }

  async updateCard(id, like) {
    const res = await fetch(`${API_BASE}/updateCard/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ like }),
    });
    if (!res.ok) throw new Error(`Error updating card: ${res.status}`);
    return res.json();
  }

  async deleteCard(id) {
    const res = await fetch(`${API_BASE}/deleteCard/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Error deleting card: ${res.status}`);
    return res.text(); // <- el backend devuelve texto
  }
}

const api = new Api();
export default api;
