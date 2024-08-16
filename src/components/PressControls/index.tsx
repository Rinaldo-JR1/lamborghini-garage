import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';

export function PressControls() {
    return (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color={"#01A6B3"} onPress={() => { }} />
            <Text style={styles.priceLabel}>Valor</Text>
            <Button title=">" color={"#01A6B3"} onPress={() => { }} />
        </View>
    );
}