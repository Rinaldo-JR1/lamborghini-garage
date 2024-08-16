import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';

export function CarImage() {
    return (
        <View style={styles.carImageContainer}>
            <Image
                style={styles.carImage}
                source={{
                    uri: `${CAR_ASSETS_BASE_URL}5.png`,
                }}
            />
        </View>
    );
}