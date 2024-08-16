import React from 'react';
import { Image, View } from 'react-native';
import Logo from "../../../assets/logo.png";
import { styles } from './styles';

export function LogoBox() {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo} />
        </View>
    );
}