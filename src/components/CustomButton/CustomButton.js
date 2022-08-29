import React from "react";
import {View, Text, StyleSheet, Pressable } from 'react-native';


const CustomButton = ({onPress, text, bgColor, fgColor}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container,
                bgColor ? {backgroundColor: bgColor} : {},
                ]}>
            <Text 
                style={[
                    styles.text,
                    fgColor ? {color: fgColor} : {},
                ]}
            >{text}</Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        
        width:'100%',
        /*backgroundColor: '#3B71F3',*/
        padding: 15,
        marginVertical : 15,

        /*alignItems: 'center',
        borderRadius: 5,*/
        borderWidth:1,
        borderColor:"#ff8c52",
        backgroundColor:"#ff8c52",
        paddingHorizontal:20,
        borderRadius:12,
        justifyContent:"center",
        alignContent:"center",
        height:60,
        width:'100%',
        alignItems:"center"
    },
    
    text: {
        /*fontWeight:'800',
        color:'white',*/
        color:"white",
        fontSize:15,
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
        margintop:-3
    },
    
});
export default CustomButton;