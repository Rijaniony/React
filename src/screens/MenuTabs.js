import React, {useState,useEffect}  from "react";
import { View,StyleSheet,FlatList,TouchableOpacity,Text,Image,Animated,Dimensions,SafeAreaView} from "react-native";
import MenuCard from "../components/MenuCard";
import { MenuListeData } from "../screens/global/MenuListeData";
import { ProductData ,ProductDataTacos,ProductDataSalade,ProductDataBoisson,ProductDataSoupe} from "./global/ProductData";
import {colors} from "../screens/global/styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import {useForm, Controller} from 'react-hook-form';




const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

export function Route1(){
    const [orderItems, setOrderItems] = React.useState([]);
    const scrollX= new Animated.Value(0);
    const [indexCheck, setIndexCheck]= useState ("0");
    const [restaurant,setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);

    const navigation = useNavigation  ();//pour accéder à la navigation
    
    const {
            control, 
            handleSubmit, 
            formState:{errors},
        } = useForm();
    
    //fonction sur le boutton Order
    const onOrderPressed = (data) => {
         // console.warn("Map");
        //on valide d'abord l'utilisateur
        console.log(data);
                                                           
        navigation.navigate("OrderDeliveryScreen");
                                                           
    };
    //fonction quantité de produit
    function editOrder(action,menuId,price){
        let orderList = orderItems.slice()
        let item = orderList.filter(a =>a.menuId == menuId)
        if(action == "+")
        {
           if(item.length >0)
            {
                let newQuantity = item[0].quantity +1
                item[0].quantity = newQuantity
                item[0].total = item[0].quantity*price
               
            }else {
                const newItem = {
                    menuId: menuId, 
                    quantity:1 ,
                    price:price,
                    total: price,
                }
                orderList.push(newItem)
            }
            setOrderItems(orderList)
        }else {
            if(item.length>0)
            {
                if(item[0]?.quantity >0){
                    let newQuantity = item[0].quantity - 1
                    item[0].quantity = newQuantity
                    item[0].total = newQuantity = price
                }
            }
            setOrderItems(orderList)
        }
    }

    function getOrderQuantity(menuId){
        let OrderItem = orderItems.filter(a => a.menuId == menuId)
        
        if(OrderItem.length >0)
        {
            return OrderItem[0].quantity;
        }
        else{
            return 0;
        }
    }
   //fonction qui affiche le meme nbr de quantité de produit sur Items in Cart
   function getBasketItemCount(){
     let itemCount = orderItems.reduce((a,b)=>a+(b.quantity||0), 0)
     return itemCount
   }

   //fonction pour le prix
   function sumOrder(){
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)
        return total.toFixed(2)
    }

   

    return(
        <View style={{flex:1}}>
           
            <FlatList
                    //horizontal
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {nativeEvent:{contentOffset:{x: scrollX}}}
                    ],{useNativeDriver:false})}

                    style ={{backgroundColor:"white"}}
                    data = {ProductData}
                    keyExtractor = {(item)=> item.id}
                    extraData = {indexCheck}
                    renderItem = {({item,index})=>(
                    <View style={{marginTop:15}}> 
                            <ScrollView style={{height:200, width:500}}>
                            
                                <Image
                                    source = {item.image}
                                    style={{justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 500,
                                    height: 300,}}
                                />
                            
                            <View>
                                {/*Quantité*/}
                                <View style={{
                                    position:'absolute',
                                    bottom: -20,
                                    width:"100%",
                                    height:54,
                                    justifyContent:'center',
                                    flexDirection:'row',
                    
                                }}
                                >
                                    <TouchableOpacity 
                                        style={{
                                            width:50,
                                            backgroundColor:"white",
                                            alignItems:'center',
                                            justifyContent:'center',
                                            borderTopLeftRadius:25,
                                            borderBottomLeftRadius:25,
                                        }}
                                        onPress = {()=>editOrder("-",item.menuId, item.price)}
                                        >
                                        <Text style={{fontWeight:"bold",fontSize:20}}>-</Text>
                                    </TouchableOpacity>

                                    <View style={{
                                        width:50,
                                        backgroundColor:"white",
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}>
                                        <Text style={{fontWeight:"bold",fontSize:20}}>{getOrderQuantity(item.menuId)}</Text>
                                    </View>
                                
                                    <TouchableOpacity 
                                        style={{
                                            width:50,
                                            backgroundColor:"white",
                                            alignItems:'center',
                                            justifyContent:'center',
                                            borderTopRightRadius:25,
                                            borderBottomRightRadius:25,
                                        }}
                                        onPress = {()=>editOrder("+",item.menuId,item.price)}
                                        >
                                        <Text style={{fontWeight:"bold",fontSize:20}}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                    
                            </View>
                            
                            {/*Name & description */}
                              
                            <View style={{
                                    width:"100%",
                                    alignItems:'center',
                                    marginTop:25,
                                    //paddingHorizontal: 25,
                                    flex:30,
                            }}>
                                <Text style={styles.text1}> {item.name}</Text>
                                <Text style={styles.text1}> {item.price} Ariary</Text>
                                <Text style={styles.text2}> {item.details}</Text>
                            </View>
                            {/*Calories */}
                            <View
                                style={{
                                    flexDirection:"row",
                                    marginTop:10,
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Icon
                                    name="fire"
                                    type="material-community"
                                    
                                />
                                <Text style={{color:colors.grey1,marginTop:2}}> 3000 Calories</Text>
                            </View>
                           
                        </ScrollView>
                    </View>
                    )}
                />
                <View style={{
                    backgroundColor:'white',
                    borderTopLeftRadius:40,
                    borderTopRightRadius:40,
                }}> 
                    <View style={{
                        flexDirection:'row',
                        paddingVertical:100,
                        paddingHorizontal:20,
                        fontSize:15,
                        justifyContent:'space-between',
                    }}>
                        <Text style={{color:colors.grey1,fontWeight:'bold',fontSize:15}}>{getBasketItemCount()} Items in Cart</Text>
                        <Text style={{color:colors.grey1,fontWeight:'bold',fontSize:15}}>{sumOrder()}</Text>
                    </View>
                </View>
                <View>
                    <View style={{paddingVertical:100,
                                paddingHorizontal:20,
                                flexDirection:'row',
                                //alignItems:'center', 
                                paddingLeft:10,
                                justifyContent:'space-between'
                        }}>
                                    <Icon
                                        type ='material-community'
                                        name ='map-marker'
                                        color ={colors.grey1}
                                        size = {36}
                                        style={{width:20,height:20}}
                                        resizeMode ="contain"
                                    />
                                    <Text style={{marginLeft:5}}> Location</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                                    <Icon  //image interrupteur 
                                        type ='material-community'
                                        name ='map-marker'
                                        color ={colors.grey1}
                                        size = {36}
                                        style={{width:20,height:20}}
                                        resizeMode ="contain"
                                    />
                                    <Text style={{marginLeft:5}}>8888</Text>
                    </View>

                </View>
                {/*Order Button*/ }
                <View>
                    <TouchableOpacity
                        //onPress={handleSubmit(onOrderPressed)}
                        onPress={()=>navigation.navigate("OrderDeliveryScreen",{
                                restaurant: restaurant,
                                currentLocation : currentLocation
                        })}
                    >
                            
                        <View style={styles.view11}>
                            <View style={styles.view12}>
                                <Text style={styles.text13}>Order</Text>
                               {/* <View style={styles.text13}>
                                    <Text style={styles.text13}>0</Text>
                                </View>*/}
                            </View>
                        </View>

                     </TouchableOpacity>
            
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
        color:colors.grey2,
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
    view11:{
        backgroundColor:colors.buttons,
        height:50,
        alignContent:"center",
        marginBottom:0,
        borderRadius:30,
        position:'absolute',
        bottom: 20,
        left:15,
        right:15,
        
    },
    view12:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text12:{
        padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground,
    },
    view13:{
        borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2,
        
        
    },
    text13:{
        paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:25,
        color:colors.cardbackground,
        justifyContent:'center',
        marginVertical:8,
        marginLeft:140,
    },
    tab:{
        paddingTop:0,
        backgroundColor:colors.buttons,
        justifyContent:"space-between",
        alignItems:"center",
    },
    tabContainer:{
        alignItems:"center",
        alignContent:'center',
        justifyContent:'center',

    },
    tabLabel:{
        fontWeight:"bold",
        color:colors.cardbackground,
    },
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45,
    },
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
        fontSize:18,
    },
    view15:{
        marginTop:5,
        paddingBottom:20,
    },
});