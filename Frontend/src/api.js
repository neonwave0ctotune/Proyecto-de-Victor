class Api { 
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._header = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  // Obtener todas las cartas
  getAllCards() {
    return fetch(`${this._baseUrl}/getAllCards`, {
      headers: this._header,
    }).then(this._handleServerResponse);
  }

  // Crear carta
  createCard(cardData) {
    return fetch(`${this._baseUrl}/createCard`, {
      method: "POST",
      headers: this._header,
      body: JSON.stringify(cardData),
    }).then(this._handleServerResponse);
  }

  // Actualizar carta parcialmente (ej: like)
  updateCard(cardId, like) {
    return fetch(`${this._baseUrl}/updateCard/${cardId}`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({ like }),
    }).then(this._handleServerResponse);
  }

  // Eliminar carta
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/deleteCard/${cardId}`, {
      method: "DELETE",
    }).then(this._handleServerResponse);
  }
}

// Instanciamos la clase con el URL de tu backend en Render
const api = new Api({
  baseUrl: "https://proyecto-de-victor.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
