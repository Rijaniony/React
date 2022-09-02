import React,{useState} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../screens/global/styles'
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import SignInScreen from '../screens/SignInScreen';
import {Alert} from 'react-native';

/*async function signOut(){
    try{
        SignInScreen()
        .signOut()
        .then(
            
                () => {console.log("UserSuccessfully signed out")
        })
    }catch (error){
     Alert.alert(error.code)
    }
}*/

const SignOutScreen = () => {
    const navigation = useNavigation  ();//pour accéder à la navigation
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();

     /*Les fonctions */
     /*fonction lorsqu'on press sur le boutton Map */
    const onSignOutPressed= (data) => {
     // console.warn("Map");
    //on valide d'abord l'utilisateur
         console.log(data);
                                                    
            navigation.navigate('SignInWelcomeScreen');
            Alert.alert("USER SUCCESSFULY SIGNED OUT");
                                                    
    };
    
    
    return (
        <TouchableOpacity>
            <Icon 
                    type='material-community'
                    name='logout-variant'
                    color={colors.cardbackground}
                    size={32}
                    onPress={handleSubmit(onSignOutPressed)}
                /> 
        
        </TouchableOpacity>
                
    )
}
export default SignOutScreen;