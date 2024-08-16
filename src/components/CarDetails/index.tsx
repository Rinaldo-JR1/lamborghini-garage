import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function CarDetails() {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>MODEL</Text>
        </View>
    );
}