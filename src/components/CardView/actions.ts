import { Dispatch, SetStateAction } from "react";
import { CarModel } from "./props";
import { fetchGetCarData } from "../../api/routes/getCars";

export const loadCarData = async (id: number, setCarData: Dispatch<SetStateAction<CarModel | null | undefined>>) => {
  try {
    const carData = await fetchGetCarData(id);
    setCarData(carData);
  } catch (error) {
    console.error(error);
    setCarData(undefined);
  }
};
export const handlePreviousItem = async () => {};
export const handleNextItem = async () => {};
