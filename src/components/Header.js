import React from 'react'

import { View,Text,StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {colors,parameters} from '../screens/global/styles';
import { Icon } from 'react-native-elements';

const Header = () =>{

    const navigation = useNavigation  ();//pour accéder à la navigation
    
    const {
        control, 
        handleSubmit, 
        formState:{errors},
    } = useForm();
    
    
    /*Les fonctions */
    /*fonction lorsqu'on press sur le boutton Sign in */
    const onBack = (data) => {
       // console.warn("Sign in");
        //on valide d'abord l'utilisateur
        console.log(data);

        navigation.navigate('SignInWelcomeScreen');

    };
    return ( 
        <View style={styles.header}>
            <View style={{marginVertical:10, marginHorizontal:15}}>
                <Icon
                    type='material-community'
                    name='arrow-left'
                    color={colors.headerText}
                    size = {28}
                    onPress = {handleSubmit(onBack)}
                />
                
            </View>
            <View>
                    <Text style={styles.headerText}>MY ACCOUNT</Text>
            </View>
        </View>
    );
     
 };
 
 const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
    },
     headerText:{
        color: colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft: 30,
        marginVertical: 10,
    },
 })
 export default Header;