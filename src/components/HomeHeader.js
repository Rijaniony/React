import React,{useState} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../screens/global/styles'
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import SignOutScreen from './SignOutScreen';


const HomeHeader = () => {

    const navigation = useNavigation  ();//pour accéder à la navigation
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();

     /*Les fonctions */
     /*fonction lorsqu'on press sur le boutton Map */
    const onMapPressed = (data) => {
     // console.warn("Map");
    //on valide d'abord l'utilisateur
            console.log(data);
                                                    
            navigation.navigate('RestaurantsMapScreen');
                                                    
    };
    
    const BadgeIcon = withBadge(4)(Icon);//nombre sur l'icone panier
    return(
        <View style={styles.header}>
            <TouchableOpacity>
             <View style={{marginLeft:15,marginTop:10}}> 
                <Icon
                    type='material'
                    name='person'
                    size={32}
                    color={colors.cardbackground}
                />
             </View>
             </TouchableOpacity>
             
             <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:colors.cardbackground,fontSize:25,fontWeight:'bold'}}>Xpress Food</Text>
             </View>
            
             <TouchableOpacity>
             <View style={{alignItems:'center', justifyContent:'center',marginRight:25,marginTop:10}}>
                <BadgeIcon
                    type='material-community'
                    name='cart'
                    size={32}
                    color={colors.cardbackground}
                />
             </View>
             </TouchableOpacity>
        </View>
)}

const styles= StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent:'space-between',
        
        
    }
})
export default HomeHeader;