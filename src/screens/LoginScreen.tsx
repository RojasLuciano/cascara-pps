import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { RootStackParamList } from '../../App';

const LoginScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>PANTALLA DE HOME</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 30,
        color: '#000',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }
    
});
