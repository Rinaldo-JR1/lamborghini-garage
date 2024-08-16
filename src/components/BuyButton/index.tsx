import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { AntDesign } from "@expo/vector-icons"
export function BuyButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="shoppingcart" size={24} color="black" style={styles.icon} />
                <Text style={styles.buttonText}>Buy This</Text>
            </TouchableOpacity>
        </View>
    );
}