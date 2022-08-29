import React,{useState} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../screens/global/styles'

const HomeHeader = () => {
    
    const BadgeIcon = withBadge(4)(Icon);//nombre sur l'icone panier
    return(
        <View style={styles.header}>
             <View style={{marginLeft:15,marginTop:10}}> 
                <Icon 
                    type='material-community'
                    name='menu'
                    color={colors.cardbackground}
                    size={32}
                /> 
             </View>
             <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:colors.cardbackground,fontSize:25,fontWeight:'bold'}}>Xpress Food</Text>
             </View>
             <View style={{alignItems:'center', justifyContent:'center',marginRight:20}}>
                <BadgeIcon
                    type='material-community'
                    name='cart'
                    size={32}
                    color={colors.cardbackground}
                />
             </View>
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