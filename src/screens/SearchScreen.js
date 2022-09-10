import React, { useState } from 'react'
import {View, Text,StyleSheet,FlatList,TouchableWithoutFeedback,Image, Dimensions} from 'react-native'
import { colors } from '../screens/global/styles';
import SearchComponents from '../components/SearchComponents';
import { Data } from '../screens/global/Data';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchScreen = () => {

    const [indexCheck, setIndexCheck]= useState ("0");
    
    

    const navigation = useNavigation  ();//pour accéder à la navigation
    const {
        control, 
        handleSubmit, 
        formState:{errors},
    } = useForm();

    return (
        <View style={{flex:1,marginBottom:10,paddingTop:20}}>
            <SearchComponents/>
            <View>
                <FlatList //on va prendre les images dans Data
                    style = {{marginBottom:1}}
                    data = {Data}
                    keyExtractor = {(item) => item.id}
                    extraData = {indexCheck}
                    renderItem = {({item,index}) => (
                        <TouchableWithoutFeedback>
                            <View>
                                <Image
                                     style = {styles.image}
                                     source = {item.image}
                                />
                                   
                                    <View>
                                        <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                                    </View>
                                
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal = {false}
                    showsVerticalScrollIndicator ={false}
                    numColumns = {2}

                />
                
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    imageView:{
        borderRadius :10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035,
    },
    image:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10,
    },
    listeHeader:{
        fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12,
    },
    textView:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52,52,52,0.3)',
    },
})
export default SearchScreen;