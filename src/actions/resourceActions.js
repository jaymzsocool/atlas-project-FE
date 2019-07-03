import axios from "axios";

export const FETCH_RESOURCES = "FETCH_RESOURCES";

const local = "http://localhost:3333";
const url = local;

export const fetchResources = () => dispatch => {
    axios
        .get(`${url}/api/resources`)
        .then(res => dispatch({ type: FETCH_RESOURCES, payload: res.data }))
}