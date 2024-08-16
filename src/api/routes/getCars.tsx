import { Dispatch, SetStateAction } from "react";
import { CarModel } from "../../components/CardView/props";
import { api } from "../config";

interface apiResponse {
  cars: CarModel[];
}

export const fetchGetCarData = async (
  id: number,
  setCarDataCallback: Dispatch<SetStateAction<CarModel |  undefined>>
) => {
  try {
    const res = await api.get<apiResponse>("/lamborghini.json");
    const carData = res.data.cars.find((car) => car.id === id);

    setCarDataCallback(carData);
  } catch (error) {
    console.error(error);
  }
};
