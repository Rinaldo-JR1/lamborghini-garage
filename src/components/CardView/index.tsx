import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Divider } from '../Divider';
import { BuyButton } from '../BuyButton';
import { CarImage } from '../CarImage';
import { CarDetails } from '../CarDetails';
import { LogoBox } from '../LogoBox';
import { PressControls } from '../PressControls';
import { CarModel } from './props';
import { loadCarData } from './actions';

export function CardView() {
    const [carData, setCarData] = useState<CarModel | null>()
    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData)
        })
    }, [])
    return (
        <View style={styles.imageContainer}>
            <LogoBox />
            <Divider />
            <CarDetails />
            <CarImage />
            <Divider />
            <BuyButton />
            <PressControls />
        </View>
    );
}