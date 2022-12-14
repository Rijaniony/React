import React,{useState} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,
        ScrollView,FlatList, Pressable,Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements'
import HomeHeader from '../../components/HomeHeader';
import {colors,parameters} from '../global/styles';
import { Data,restaurantsData, Datapromotions} from '../global/Data';
import FoodCard from '../../components/FoodCard';
import { resto } from '../global/resto';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width //on prend la dimension de l'ecran pour l'ajuster

const index = () => {
    const [delivery, setDelivery] = useState(true);//lorsqu'on press sur le bouton ca change de couleur
                                                    //la condition est sur backgroundColor

    const [indexCheck, setIndexCheck]= useState ("0"); //dans le FlatList de la Categories on initialise à 0 
                                                        //d'ou ca pointe sur le 1er image alors car c'est l'indice 0
    return(         
        <View style={styles.container}>
             <HomeHeader/>
             <ScrollView //les indicateurs pour scroller de haut en bas
                stickyHeaderIndices = {[0]}
                showsVerticalScrollIndicator = {true} //ici pour scroller de haut en bas
             > 
                    <View>
                        <View style={{marginTop:10, flexDirection:'row',justifyContent:'space-evenly'}}>
                            <TouchableOpacity
                                onPress={()=>{setDelivery(true)}} //lorsqu'on press le bouton la couleur change
                            >
                                <View style={{...styles.deliveryButton,backgroundColor: delivery?colors.buttons : colors.grey5}}>
                                    <Text style={styles.deliveryText}> DELIVERY</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={()=>{setDelivery(false)}}  //lorsqu'on ne  press pas le bouton la couleur change
                            >
                                <View style={{...styles.deliveryButton,backgroundColor: delivery?colors.grey5 : colors.buttons}}>
                                    <Text style={styles.deliveryText}> PICK UP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.filterView}>
                        <View style={styles.addressView}>
                                <View style={{flexDirection:'row',alignItems:'center', paddingLeft:10}}>
                                    <Icon
                                        type ='material-community'
                                        name ='map-marker'
                                        color ={colors.grey1}
                                        size = {36}
                                    />
                                    <Text style={{marginLeft:5}}> Infocentre Soavimbahoaka</Text>
                                </View>

                                <View style={styles.clockView}>
                                    <Icon
                                        type ='material-community'
                                        name ='clock-time-four'
                                        color ={colors.grey1}
                                        size = {26}
                                    />
                                    <Text style={{marginLeft:5}}> Now</Text>
                                </View>
                        </View>

                        <View>
                                <Icon
                                    type ='material-community'
                                    name ='tune'
                                    color ={colors.grey1}
                                    size = {26}
                                />
                        </View>
                    </View>

                    <View style={styles.headerTextView}>
                        <Text style={styles.headerText}>Categories</Text>
                    </View>

                    <View>
                        <FlatList //on va mettre dans FlatList tout ce qui sont dans Data.js
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data = {Data}
                            keyExtractor = {(item)=> item.id}
                            extraData = {indexCheck}
                            renderItem = {({item,index})=>(
                                <Pressable
                                    onPress={()=>{setIndexCheck(item.id)}} //lorsqu'on presse sur les photos, ca change de couleur
                                > 
                                    <View style={indexCheck === item.id?{...styles.smallCardSelected} : {...styles.smallCard}}>
                                        <Image
                                            style = {{height:60,width:60,borderRadius:30}}
                                            source = {item.image} //on passe en source les images dans Data

                                        />
                                        <View>
                                            <Text style={indexCheck === item.id?{...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text> 
                                        </View>
                                    </View>
                                </Pressable>   
                            )}
                        />
                    </View>

                    <View style={styles.headerTextView}>
                        <Text style={styles.headerText}>Free delivery now</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginLeft:15, fontSize:16, marginTop:10, marginRight:5, color: colors.grey2}}>Options changing</Text>
                        
                        <CountDown
                            until = {3600}
                            size= {14}
                            digitStyle = {{backgroundColor:colors.lightgreen}}
                            digitTextStyle = {{color:colors.cardbackground}}
                            timeToShow ={['M','S']}
                            timeLabels = {{m:'Min', s:'Sec'}}
                        />
                    </View>
                    <View>
                    <FlatList //on va mettre dans FlatList tout ce qui sont dans resto.js
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data = {resto}
                            keyExtractor = {(item)=> item.id}
                            extraData = {indexCheck}
                            renderItem = {({item,index})=>(
                                <Pressable
                                    onPress={()=>{setIndexCheck(item.id)}} //lorsqu'on presse sur les photos, ca change de couleur
                                > 
                                    <View style={{marginVertical:10}}>
                                        <Image
                                            style = {{height:200,width:200,borderRadius:30}}
                                            source = {item.image} //on passe en source les images dans Data

                                        />
                                        <View>
                                            
                                            <Text style={styles.smallCardTextResto}>{item.name}</Text> 
                                            <View style={styles.filterView}>
                                                <Icon
                                                    name='place'
                                                    type='material'
                                                    color={colors.grey2}
                                                    size ={18}
                                                    iconStyle = {{
                                                        marginTop:3
                                                    }}
                                                />
                                                <Text style={styles.minutes}> {item.farAway} Min</Text>
                                                <Text style={styles.minutes}> à </Text>
                                                <Text style={styles.minutes}>{item.businessAddress}</Text>
                                            </View>
                                           
                                            
                                        </View>
                                    </View>
                                </Pressable>   
                            )}
                        />
                    </View>

                    <View style={styles.headerTextView}>
                        <Text style={styles.headerText}>Promotions available</Text>
                        
                    </View>

                    <View>
                    <FlatList //on va mettre dans FlatList tout ce qui sont dans Data.js
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data = {Datapromotions}
                            keyExtractor = {(item)=> item.id}
                            extraData = {indexCheck}
                            renderItem = {({item,index})=>(
                                <Pressable
                                    onPress={()=>{setIndexCheck(item.id)}} //lorsqu'on presse sur les photos, ca change de couleur
                                > 
                                    <View style={{marginVertical:10}}>
                                        <Image
                                            style = {{height:200,width:200,borderRadius:30}}
                                            source = {item.image} //on passe en source les images dans Data

                                        />
                                        <View>
                                            
                                            <Text style={styles.smallCardTextResto}>{item.name}</Text> 
                                            <View style={styles.filterView}>
                                                <Icon
                                                    name='place'
                                                    type='material'
                                                    color={colors.grey2}
                                                    size ={18}
                                                    iconStyle = {{
                                                        marginTop:3
                                                    }}
                                                />
                                                <Text style={styles.minutes}> {item.farAway} Min</Text>
                                                <Text style={styles.minutes}> à </Text>
                                                <Text style={styles.minutes}>{item.businessAddress}</Text>
                                            </View>
                                           
                                            
                                        </View>
                                    </View>
                                </Pressable>   
                            )}
                        />
                    </View>
             </ScrollView>
        </View>
    
)}

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    deliveryButton:{
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16,
    },
    filterView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginHorizontal:10,
        marginVertical:10
    },
    clockView: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    addressView:{
        flexDirection:'row', 
        backgroundColor:colors.grey5,
        borderRadius:15,
        paddingVertical:3,
        justifyContent:'space-evenly',
        
    },
    headerText:{
        color : colors.grey1,
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft:10,
        
        
    },
    headerTextView:{
        backgroundColor: colors.grey5,
        paddingVertical:2,
        flexDirection:'row'
    },
    smallCard:{
        borderRadius:30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor: colors.buttons,
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardTextSelected:{
        fontWeight:'bold',
        color: colors.cardbackground,

    },
    smallCardText:{
        fontWeight:'bold',
        color: colors.grey2,
        alignItems:'center',
        fontSize: 15,
        
    },
    smallCardTextResto:{
        fontWeight:'bold',
        color: colors.grey2,
        alignItems:'center',
        fontSize: 15,
        marginTop:5,
        marginHorizontal: 10,
        justifyContent: 'center',
        marginLeft:30,
    },
    minutes:{
        fontSize:15,
        fontWeight:'bold',
        paddingTop: 5,
        color: colors.grey2,
    },
   
})
export default index;