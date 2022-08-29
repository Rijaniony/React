import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomInputmdp from '../../components/CustomInputmdp/CustomInputmdp';
import CustomButton from '../../components/CustomButton/CustomButton';
/*import CustomButtonForgotMdp from '../../components/CustomButtonForgotMdp/CustomButtonForgotMdp';*/
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from'react-hook-form';

const EMAIL_REGEX =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () =>{
    /*const [username, setUsername] = useState(''); /*initialiser String le username  */
    /*const [email, setEmail] = useState(''); /*initialiser String le mail  */
    /*const [password, setPassword] = useState(''); /*initialiser String le password  */
    /*const [passwordRepeat, setPasswordRepeat] = useState(''); /*initialiser String le password encore  */
    
    const {control, handleSubmit, watch} = useForm();

    const pwd = watch('password');
    const navigation = useNavigation  ();//pour accéder à la navigation
    
    /*Les fonctions */
    /*fonction lorsqu'on press sur le boutton Sign in */
    const onRegisterPressed = () => {
        //console.warn("onRegisterPressed");
        navigation.navigate('ConfirmEmail');
    };

    /*fonction lorsqu'on n'a pas encore de compte*/
    const onSignInPressed = () => {
        //console.warn("onSignInPressed");
        navigation.navigate('SignIn');
    };
    
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
        
    };

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    };
    return (
        /*ScrollView pour faire une défiller de haut en bas du contenu de l'écran */
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Create an account </Text>

            <CustomInput 
                name="username"
                control={control}
                placeholder="Username" 
                rules={{
                    required: 'Username is required',
                    minLength: {
                        value: 3, 
                        message: 'Username should be at least 3 characters long'
                    },
                    maxLength: {
                        value: 24, 
                        message: 'Username should be at least 24 characters long'
                    },
                }}
                
            />
            <CustomInput 
                name="email"
                control={control}
                placeholder="abcd@hji.com"
                rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
                
            />
            <CustomInput
                name="password"
                control={control}
                placeholder="Password" 
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value:3, 
                        message: 'Password should be at least 3 characters long'
                    },
                    
                }}
            />
             <CustomInput 
                name="password-repeat"
                control={control}
                placeholder=" Repeat Password" 
                secureTextEntry
                rules={{
                    validate: value => value === pwd ||'Password do not match',
                    
                }}
            />
            <CustomButton
                text="REGISTER"
                onPress={handleSubmit(onRegisterPressed)} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                
            />

            <Text style={styles.text}> 
                By registering, you confirm that you accept our {' '}
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>{' '} and {' '}
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
            </Text>

            <SocialSignInButtons/>

            <CustomButton
                text="Have an account? Sign in"
                onPress={onSignInPressed} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                bgColor = 'white'
                fgColor= "gray"
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: 20,
        
    },
     title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#051C60',
        margin: 10,
    },
    text:{
        color:'gray',
        marginVertical:10,
        fontWeight: 'bold',
    },
    link:{
        color:'#FDB075',
    },
});
export default SignUpScreen;