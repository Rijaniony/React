import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions,Image} from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import{colors, parameters,title} from "../screens/global/styles";
import Swiper from "react-native-swiper";


const SignInWelcommeScreen= () => {
    const navigation = useNavigation  ();//pour accéder à la navigation
    const {
        control, 
        handleSubmit, 
        formState:{errors},
    } = useForm();
    const {height} = useWindowDimensions();
    /*fonction lorsqu'on n'a pas encore de compte*/
    const onSignInPressed = (data) => {
        // console.warn("Sign in");
         //on valide d'abord l'utilisateur
         console.log(data);
 
         navigation.navigate('SignIn');
 
     };
     const onSignUpPressed = () => {
        console.warn("onSignUpPressed");

        //on le redirige vers la page SignUpScreen
        navigation.navigate ('SignUp');
    };
    
    return (
        <View style={{flex:1}}>
            <View style={{justifyContent:"flex-start", alignItems:"center",paddingTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons, fontWeight:"bold"}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26,color:colors.buttons, fontWeight:"bold"}}>IN YOUR AREA</Text>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View style={{flex:4, justifyContent:"center",marginVertical:40}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                                <Image 
                                    source={require("../screens/images/pizza.png")}
                                    style={{height:"100%", width:"100%"}}
                                />

                    </View>
                    <View style={styles.slide2}>
                            <Image 
                                source={require("../screens/images/spaghetti.png")}
                                style={{height:"100%", width:"100%"}}
                            />

                    </View>
                    <View style={styles.slide2}>
                        <Image 
                            source={require("../screens/images/spaghetti.png")}
                            style={{height:"100%", width:"100%"}}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            source={require("../screens/images/poulet.png")}
                            style={{height:"100%", width:"100%"}}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image 
                            source={require("../screens/images/hamburger.png")}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                </Swiper>

            </View>

            <View style={{flex:4,justifyContent:"flex-end",marginBottom:20,marginTop:20}}>
                <View style={{marginHorizontal:20, marginTop:20}}>
                    <CustomButton
                        text="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={handleSubmit(onSignInPressed)}/*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */

                    />
                </View>
                <View style={{marginHorizontal:20, marginVertical:20}}>
                    <CustomButton
                        text="CREATE AN ACCOUNT"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={handleSubmit(onSignUpPressed)}
                    />  
            </View>
            </View>
        </View>
    );
};
const styles= StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons,

    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3,
    },
    
});
export default SignInWelcommeScreen;