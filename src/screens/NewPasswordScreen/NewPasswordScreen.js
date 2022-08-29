import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomInputmdp from '../../components/CustomInputmdp/CustomInputmdp';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
/*import CustomButtonForgotMdp from '../../components/CustomButtonForgotMdp/CustomButtonForgotMdp';*/
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () =>{
    const{control, handleSubmit}=useForm();
    /*const [code, setCode] = useState(''); /*initialiser String le code qu'on recoit par email  */
    /*const [newPassword, setNewPassword] = useState(''); /*initialiser String le nouveau mdp */
    
    const navigation = useNavigation  ();//pour accéder à la navigation
    /*Les fonctions */
    /*fonction lorsqu'on press sur le boutton Confirm */
    const onSubmitPressed = (data) => {
        console.warn(data);
        //console.warn("onSubmitPressed");
        navigation.navigate('HomeScreen');
    };
    const onSignInPressed = () => {
        //console.warn("onSignInPressed");
        navigation.navigate('SignIn');
    };

    return (
        /*ScrollView pour faire une défiller de haut en bas du contenu de l'écran */
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Reset your password </Text>
            
            <CustomInput 
                name="code"
                placeholder="Code" 
                control={control}
                rules={{
                    required :'Code is required'
                }}
            />
            <CustomInput 
                name="password"
                placeholder="Enter your new Password" 
                control={control}
                rules={{
                    required :'Password is required',
                    minLength:{
                        value:8,
                        message:'Password should be at least 5 characters long',
                    },
                }}
            />
           
            <CustomButton
                text="Submit"
                onPress={handleSubmit(onSubmitPressed)} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                bgColor = 'orange'
                fgColor= "white"
            />
           
           <CustomButton
                text="Back to Sign in"
                onPress={onSignInPressed} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                bgColor = 'white'
                fgColor= "orange"
            
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
        fontSize: 25,
        fontWeight: 'bold',
        color:'#051C60',
        margin: 10,
        marginVertical: 50,
    },
    text:{
        color:'gray',
        marginVertical:10,
        fontWeight: 'bold',
    },
});
export default NewPasswordScreen;