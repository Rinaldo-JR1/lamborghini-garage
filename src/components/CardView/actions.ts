import { Dispatch, SetStateAction } from "react";
import { CarModel } from "./props";
import { fetchGetCarData } from "../../api/routes/getCars";

export const loadCarData = async (
  id: number,
  setCarData: Dispatch<SetStateAction<CarModel | undefined>>
) => {
  try {
    await fetchGetCarData(id, setCarData);
  } catch (error) {
    console.error(error);
    setCarData(undefined);
  }
};
export const handlePreviousItem = async () => {};
export const handleNextItem = async () => {};
