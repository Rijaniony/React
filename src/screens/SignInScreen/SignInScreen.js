import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomInputmdp from '../../components/CustomInputmdp/CustomInputmdp';
import CustomButton from '../../components/CustomButton/CustomButton';
/*import CustomButtonForgotMdp from '../../components/CustomButtonForgotMdp/CustomButtonForgotMdp';*/
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {colors,parameters} from '../screens/global/styles';
import { Icon } from 'react-native-elements';
import Header  from 'Authentification/src/components/Header';

const SignInScreen = () =>{
   /* const [username, setUsername] = useState(''); /*initialiser String le username  */
    const [password, setPassword] = useState(''); /*initialiser String le password  */
    
    const {height} = useWindowDimensions();
    
    const navigation = useNavigation  ();//pour accéder à la navigation
    
    const {
        control, 
        handleSubmit, 
        formState:{errors},
    } = useForm();
    
    
    /*Les fonctions */
    /*fonction lorsqu'on press sur le boutton Sign in */
    const onSignInPressed = (data) => {
       // console.warn("Sign in");
        //on valide d'abord l'utilisateur
        console.log(data);

        navigation.navigate('RootClientsTabs');

    };

    /*fonction lorsque mdp oublié */
    const onForgotPasswordPressed = () => {
        //console.warn("onForgotPasswordPressed");
    
        //on le redirige vers la page ForgotPasswordScreen
        navigation.navigate('ForgotPassword');

    };

    /*fonction lorsqu'on n'a pas encore de compte*/
    const onSignUpPressed = () => {
        console.warn("onSignUpPressed");

        //on le redirige vers la page SignUpScreen
        navigation.navigate ('SignUp');
    };
    const onBack = (data) => {
        // console.warn("Sign in");
         //on valide d'abord l'utilisateur
         console.log(data);
 
         navigation.navigate('SignInWelcomeScreen');
 
     };
    
    return (
        /*ScrollView pour faire une défiller de haut en bas du contenu de l'écran */
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.root}>
                    <Image 
                    source={logo}
                    style ={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain" 
                    /> 
                   
                    <Text></Text>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.text1}>Please enter your username and password</Text>
                        <Text style={styles.text1}>registered with your account</Text>
                    </View>
                    <Text></Text>
                    <CustomInput 
                        name="username"
                        placeholder="Username" 
                        control={control}
                        rules= {{required:'Username is required'}}
                    />
                
                    <CustomInputmdp 
                        name="password"
                        placeholder="Password" 
                        secureTextEntry /*masquer le mdp */
                        rules= {{required: 'Password is required'}}
                    />
                    
                    <CustomButton
                        text="SIGN IN"
                        onPress={handleSubmit(onSignInPressed)}/*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                        
                    />

                    <CustomButton
                        text="Forgot password?"
                        onPress={onForgotPasswordPressed} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                        bgColor = 'white'
                        fgColor= "gray"
                    />

                    <SocialSignInButtons/>

                    
                </View>
            </View>
        
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container :{
        flex:1,
    },
    root:{
        alignItems:'center',
        padding: 20,
        
    },

    logo:{
        width:'50%',
        maxWidth: 300,
        maxHeight: 200,
     },
     text1:{
        color:'#86939e',
        fontSize:16,
    },
    back:{
        height:30,
        width:60,
       borderRadius:30,
    },
});
export default SignInScreen;