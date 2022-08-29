import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomInputmdp from '../../components/CustomInputmdp/CustomInputmdp';
import CustomButton from '../../components/CustomButton/CustomButton';
/*import CustomButtonForgotMdp from '../../components/CustomButtonForgotMdp/CustomButtonForgotMdp';*/
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () =>{
    
    const{control,handleSubmit} = useForm();
    /*const [username, setUsername] = useState(''); /*initialiser String le code qu'on recoit par email  */
    
    const navigation = useNavigation  ();//pour accéder à la navigation
    /*Les fonctions */
    /*fonction lorsqu'on press sur le boutton Confirm */
    const onSendPressed = (data) => {
        console.warn(data);
        //console.warn("onSendPressed");
        navigation.navigate('NewPassword');
    };
    const onSignInPressed = () => {
       // console.warn("onSignInPressed");
       navigation.navigate('SignIn');
    };

    return (
        /*ScrollView pour faire une défiller de haut en bas du contenu de l'écran */
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Reset your password </Text>
            
            <CustomInput 
                name="username"
                placeholder="Username" 
                control={control}
                rules={{
                    required : 'Username is required '
                }}
            />
           
            <CustomButton
                text="SEND"
                onPress={handleSubmit(onSendPressed)} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
                bgColor = 'orange'
                fgColor= "white"
            />
           
           <CustomButton
                text="BACK TO SIGN IN"
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
export default ForgotPasswordScreen;