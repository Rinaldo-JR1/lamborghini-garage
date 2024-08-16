import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface props{
    name:string,
    model:string
}
export function CarDetails({model,name}:props) {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.carBrand}>{name}</Text>
            <Text style={styles.carName}>{model}</Text>
        </View>
    );
}