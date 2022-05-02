import axios from "axios";

/** url base para las request a la db de pelis */
const instace = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instace;