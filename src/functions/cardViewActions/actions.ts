import { Dispatch, SetStateAction } from "react";
import { CarModel } from "../../components/CardView/props";
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
export const handlePreviousItem = async (
  carData: CarModel | undefined,
  setCarData: Dispatch<SetStateAction<CarModel | undefined>>
) => {
  try {
    if (carData && carData?.id > 1) {
      await loadCarData(carData.id - 1, setCarData);
    }
  } catch (error) {
    console.error(error);
  }
};
export const handleNextItem = async (
  carData: CarModel | undefined,
  setCarData: Dispatch<SetStateAction<CarModel | undefined>>
) => {
  try {
    if (carData && carData?.id < 10) {
      await loadCarData(carData.id + 1, setCarData);
    }
  } catch (error) {
    console.error(error);
  }
};
