class Api { 
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl
        this._header = headers
    }

    getAllCards(){
        return fetch(`${this._baseUrl}/getAllCards`, {
            headers: this._header,
        }).then(this._handleServerResponse);
    }
}

const api = new Api({
    baseUrl: "https://smart-divices-develop.onrender.com",
    headers: {
        "Content-Type": "application/json"
    },
});
export default Api;