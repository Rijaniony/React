import React from 'react'
import {View, Text,StyleSheet} from 'react-native';
import RestaurantsHeader from '../screens/RestaurantsHeader';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const GastroScreen = () => {

    const navigation = useNavigation  ();//pour accéder à la navigation
    
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();

    return(
        <View>
            <RestaurantsHeader />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default GastroScreen;