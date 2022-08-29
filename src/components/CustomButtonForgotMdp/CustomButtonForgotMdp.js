import React from "react";
import {View, Text, StyleSheet, Pressable } from 'react-native';


const CustomButtonForgotMdp = ({onPress, text}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        
        width:'100%',
        backgroundColor: 'white',
        padding: 15,
        marginVertical : 10,

        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color:'gray',
    },
    
});
export default CustomButtonForgotMdp;