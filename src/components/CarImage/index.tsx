import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';

interface props {
    id:number
}

export function CarImage({id}:props) {
    return (
        <View style={styles.carImageContainer}>
            <Image
                style={styles.carImage}
                source={{
                    uri: `${CAR_ASSETS_BASE_URL}${id}.png`,
                }}
            />
        </View>
    );
}