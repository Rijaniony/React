import React, {useState}  from "react";
import { View,StyleSheet,FlatList,TouchableOpacity,Text,Image} from "react-native";
import MenuCard from "../components/MenuCard";
import { MenuListeData } from "../screens/global/MenuListeData";
import { ProductData ,ProductDataTacos,ProductDataSalade,ProductDataBoisson,ProductDataSoupe} from "./global/ProductData";
import {colors} from "../screens/global/styles";


export function Route1(){
    const [indexCheck, setIndexCheck]= useState ("0");

    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                
                <FlatList
                    style ={{backgroundColor:"white"}}
                    data = {ProductData}
                    keyExtractor = {(item)=> item.id}
                    extraData = {indexCheck}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity>
                            <View style={styles.view1}>
                                <View style={styles.view2autre}>
                                    <View style={styles.view3}> 
                                        <Text style={styles.text1}> {item.name}</Text>
                                    
                                        <Text style={styles.text2}> {item.details}</Text>
                                        <Text style={styles.text3}> {item.price} Ariary</Text>
                                    </View>
                                    <View style={{flex:2}}> 
                                        <Image
                                            style = {styles.image}
                                            source = {item.image}
                                        />
                                </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator ={false}
                />
            </View>
        </View>
    )
}

export function Route2(){
    const [indexCheck2, setIndexCheck2]= useState ("0");
    
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                
                <FlatList
                    style ={{backgroundColor:"white"}}
                    data = {ProductDataTacos}
                    keyExtractor = {(item)=> item.id}
                    extraData = {indexCheck2}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity>
                            <View style={styles.view1}>
                                <View style={styles.view2autre}>
                                    <View style={styles.view3}> 
                                        <Text style={styles.text1}> {item.name}</Text>
                                    
                                        <Text style={styles.text2}> {item.details}</Text>
                                        <Text style={styles.text3}> {item.price} Ariary</Text>
                                    </View>
                                    <View style={{flex:2}}> 
                                        <Image
                                            style = {styles.image}
                                            source = {item.image}
                                        />
                                </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator ={false}
                />
            </View>
        </View>
    )
}
export function Route3(){
    const [indexCheck3, setIndexCheck3]= useState ("0");
    
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                
                <FlatList
                    style ={{backgroundColor:"white"}}
                    data = {ProductDataSalade}
                    keyExtractor = {(item)=> item.id}
                    extraData = {indexCheck3}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity>
                            <View style={styles.view1}>
                                <View style={styles.view2autre}>
                                    <View style={styles.view3}> 
                                        <Text style={styles.text1}> {item.name}</Text>
                                    
                                        <Text style={styles.text2}> {item.details}</Text>
                                        <Text style={styles.text3}> {item.price} Ariary</Text>
                                    </View>
                                    <View style={{flex:2}}> 
                                        <Image
                                            style = {styles.image}
                                            source = {item.image}
                                        />
                                </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator ={false}
                />
            </View>
        </View>
    )
}
export function Route4(){
    const [indexCheck4, setIndexCheck4]= useState ("0");
    
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                
                <FlatList
                    style ={{backgroundColor:"white"}}
                    data = {ProductDataBoisson}
                    keyExtractor = {(item)=> item.id}
                    extraData = {indexCheck4}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity>
                            <View style={styles.view1}>
                                <View style={styles.view2autre}>
                                    <View style={styles.view3}> 
                                        <Text style={styles.text1}> {item.name}</Text>
                                    
                                        <Text style={styles.text2}> {item.details}</Text>
                                        <Text style={styles.text3}> {item.price} Ariary</Text>
                                    </View>
                                    <View style={{flex:2}}> 
                                        <Image
                                            style = {styles.image}
                                            source = {item.image}
                                        />
                                </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator ={false}
                />
            </View>
        </View>
    )
}
export function Route5(){
    const [indexCheck5, setIndexCheck5]= useState ("0");
    
    return(
        <View style={{flex:1}}>
            <View style={styles.view2}>
                
                <FlatList
                    style ={{backgroundColor:"white"}}
                    data = {ProductDataSoupe}
                    keyExtractor = {(item)=> item.id}
                    extraData = {indexCheck5}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity>
                            <View style={styles.view1}>
                                <View style={styles.view2autre}>
                                    <View style={styles.view3}> 
                                        <Text style={styles.text1}> {item.name}</Text>
                                    
                                        <Text style={styles.text2}> {item.details}</Text>
                                        <Text style={styles.text3}> {item.price} Ariary</Text>
                                    </View>
                                    <View style={{flex:2}}> 
                                        <Image
                                            style = {styles.image}
                                            source = {item.image}
                                        />
                                </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator ={false}
                />
            </View>
        </View>
    )
}
//export const Route2 = () => (<View style ={{...styles.scene,backgroundColor:"pink"}}/>)
//export const Route3 = () => (<View style ={{...styles.scene,backgroundColor:"green"}}/>)
//export const Route4 = () => (<View style ={{...styles.scene,backgroundColor:"grey"}}/>)
//export const Route5 = () => (<View style ={styles.scene}/>)

const styles = StyleSheet.create({
    scene:{
        flex:1,
        backgroundColor:'#673ab7',
    },
    view2:{
        marginTop:5,
        paddingBottom:20,
    },
    scene2:{
        backgroundColor:'#673ab7',
    },
    view1:{
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
    view3:{
        flex:6,
        justifyContent:"space-between",
    },
    text1:{
        fontSize:15,
        color:colors.grey1,
        fontWeight:"bold",
    },
    text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2,
    },
    text3:{
        fontSize:15,
        color:colors.black,
    },
    image:{
        flex:1,
        height:100,
        width:115,
        right: 15,
        borderRadius:20,
        //resizeMode:"contain",
      
    },
});