export default class SwapiServices {
    constructor() {
        this._apiBase = 'https://swapi.dev/api'
        this._imageBase = 'https://starwars-visualguide.com/assets/img'
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    getAllPersons = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._tranformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._tranformPerson(person)
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._tranformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._tranformPlanet(planet)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._tranformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._tranformStarship(starship)
    }

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    _extraId = (item) => {
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
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _tranformStarship = (starship) => {
        return {
            id: this._extraId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passangers: starship.passangers,
            cargoCapacity: starship.cargo_capacity,
        }
    }
}