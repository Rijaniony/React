import React, { useState }  from 'react'
import {View, Text,StyleSheet,Image,Modal} from 'react-native'
import {colors} from '../global/styles';
import { TabView,TabBar } from 'react-native-tab-view';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';


const PizzaScreen= () => {
    const [modalVisible,setModalVisible] = useState(false)
    const navigation = useNavigation  ();//pour accéder à la navigation
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();
    
    const onBackPressed = (data) => {
            // console.warn("Map");
           //on valide d'abord l'utilisateur
                   console.log(data);
                                                           
                   navigation.navigate('GastroScreen');
                                                           
    };

    return (
        <View style={styles.container}>
            <View style={styles.view14}>
                    <Icon
                        name='arrow-left'
                        type='material-community'
                        color={colors.black}
                        size = {25}
                        onPress={handleSubmit(onBackPressed)}
                    />
                    <Text style={styles.text14}>Pizza</Text>
                    
            </View>
            <View>
                
            </View>
        </View>
       
       
    )
}

export default PizzaScreen;

const styles = StyleSheet.create({
    view14:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25,
    },
    text14:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.black,
        fontSize:20,
    },
    container:{
        flex:1,
        paddingTop:20,
    },
    view1autre:
    {
        backgroundColor:"white",
        elevation:4,
        shadowOpacity:0.4,
        shadowColor:"black",
        margin:5,
        padding:10,
    },
    view2autre:{
        flex:1,
        flexDirection:"row",
        padding:0,
        justifyContent:"space-between",
    },
    view3autre:{
        flex:6,
        justifyContent:"space-between",
    },
    text1autre:{
        fontSize:15,
        color:colors.grey1,
        fontWeight:"bold",
    },
    text2autre:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2,
    },
    text3autre:{
        fontSize:15,
        color:colors.black,
    },
    image:{
        flex:1,
    },
})