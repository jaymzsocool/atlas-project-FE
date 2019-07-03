import axios from "axios";

export const FETCH_MARKUPS = "FETCH_MARKUPS";

const local = "http://localhost:3333";
const url = local;

export const fetchMarkups = () => dispatch => {
    axios
        .get(`${url}/api/markups`)
        .then(res => dispatch({ type: FETCH_MARKUPS, payload: res.data }))
}