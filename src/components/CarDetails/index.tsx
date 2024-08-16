import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface props{
    price:string,
    model:string
}
export function CarDetails({model,price}:props) {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.carBrand}>{price}</Text>
            <Text style={styles.carName}>{model}</Text>
        </View>
    );
}