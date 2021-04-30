export default class SwapiServices {
    constructor() {
        this._apiBase = 'https://swapi.dev/api'
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    async getAllPersons() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._tranformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._tranformPerson(person)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._tranformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._tranformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._tranformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._tranformStarship(starship)
    }

    _extraId(item) {
        const idReg = /\/([0-9]*)\/$/;
        return item.url.match(idReg)[1]
    }

    _tranformPlanet = (planet) => {
        return {
            id: this._extraId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _tranformPerson = (person) => {
        return {
            id: this._extraId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _tranformStarship = (starship) => {
        return {
            id: this._extraId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passangers: starship.passangers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
}