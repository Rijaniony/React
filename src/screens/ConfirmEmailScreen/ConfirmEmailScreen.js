import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomInputmdp from '../../components/CustomInputmdp/CustomInputmdp';
import CustomButton from '../../components/CustomButton/CustomButton';
/*import CustomButtonForgotMdp from '../../components/CustomButtonForgotMdp/CustomButtonForgotMdp';*/
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () =>{
    
    const{control, handleSubmit}= useForm();
    /*const [code, setCode] = useState(''); /*initialiser String le code qu'on recoit par email  */
    
    const navigation = useNavigation  ();//pour accéder à la navigation
    /*Les fonctions */
    /*fonction lorsqu'on press sur le boutton Confirm */
    const onConfirmPressed = (data) => {
        //console.warn("onConfirmPressed");
       // navigation.navigate('HomeScreen');
       console.warn(data);
       navigation.navigate('SignIn');
    };

    const onSignInPressed = () => {
        //console.warn("onSignInPressed");
        navigation.navigate('SignIn');
    };

   
    return (
        /*ScrollView pour faire une défiller de haut en bas du contenu de l'écran */
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Confirm your email </Text>
            
            <CustomInput 
                name="code"
                control={control}
                placeholder="Enter your confirmation code" 
                rules={{
                    required: 'Confirmation code is required',
                    
                }}
            />
           
            <CustomButton
                text="Confirm"
                onPress={handleSubmit(onConfirmPressed)} /*lorsqu'on presse le boutton Sign in se sera cette fonction onSignInPressed qui va etre executer */
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
        fontSize: 35,
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
export default ConfirmEmailScreen;