import React, { Dispatch, SetStateAction } from "react";
import { Button, Text, View } from "react-native";

import { styles } from "./styles";
import { handleNextItem, handlePreviousItem } from "../../functions/cardViewActions/actions";
import { CarModel } from "../CardView/props";

interface props {
  carData: CarModel | undefined;
  setCarData: Dispatch<SetStateAction<CarModel | undefined>>;
}

export function PressControls({carData,setCarData}: props) {
  return (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => {
          handleNextItem(carData, setCarData);
        }}
      />
      <Text style={styles.priceLabel}>Valor</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => {
          handlePreviousItem(carData, setCarData);
        }}
      />
    </View>
  );
}
