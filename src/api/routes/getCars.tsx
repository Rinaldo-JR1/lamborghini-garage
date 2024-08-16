import { Dispatch, SetStateAction } from "react";
import { CarModel } from "../../components/CardView/props";
import { api } from "../config";

interface apiResponse {
    cars: CarModel[]
}

export const fetchGetCarData = async (id: number) => {
    try {
        await api.get<apiResponse>("/lamborghini.json").then((response) => {
            return response.data.cars.find((car) => car.id === 1) || null;
        })
    } catch (error) {
        console.error(error);
    }
}