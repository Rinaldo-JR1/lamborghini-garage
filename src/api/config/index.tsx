import axios from "axios";
import { CAR_API_URL } from "../../constants/car";

export const api = axios.create({
    baseURL: CAR_API_URL,
})