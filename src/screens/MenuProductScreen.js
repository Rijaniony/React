import React,{useState} from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import {Route1, Route2, Route3,Route4,Route5} from './MenuTabs';
import resto from '../screens/global/resto';
import { colors } from "../screens/global/styles";
import { TabView,TabBar } from 'react-native-tab-view';
import { Menu } from "./global/MenuListeData";
import {Icon} from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width

const MenuProductScreen = ({navigation,route}) => {
    const [routes] = useState(Menu) ///fonction qui appelle Menu dans MenuListeData
    const [index,setIndex] = useState(0)

    const renderTabBar = props =>(
        <TabBar
            {...props}
            indicatorStyle ={{backgroundColor:colors.cardbackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled = {true}
            style = {styles.tab}
            labelStyle = {styles.tabLabel}
            contentContainerStyle = {styles.tabContainer}
        />
    )

    const renderScene = ({route})=>{
        switch(route.key){
            case 0:
                return <Route1 name = {navigation} />
            case 1:
                return <Route2 name = {navigation} />
            case 2:
                return <Route3 name = {navigation} />
            case 3:
                return <Route4 name = {navigation} />
            case 4:
                return <Route5 name = {navigation} />

            default :
                return null
        }
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <Icon
                    name='arrow-left'
                    type='material-community'
                    color={colors.black}
                    size = {25}
                    onPress ={
                        () =>navigation.goBack() //pour que toutes les listes dans MenuListData qui est dans MenuProductScreen
                                                //revient sur la page precedente
                    }
                />
                <Text style={styles.text1}>Menu</Text>
            </View>
            <TabView
                    navigationState={{index,routes}}
                    renderScene = {renderScene}
                    onIndexChange = {setIndex}
                    initialLayout ={SCREEN_WIDTH}
                    renderTabBar = {renderTabBar}
                    tabBarPosition = 'top'
                    navigation ={navigation}
                    route ={route}
            />  
        </View>
    )
}
export default MenuProductScreen;

const styles = StyleSheet.create({
    scene:{
        flex:1,
    },
    container:{
        flex:1,
        top:0,
        left:0,
        right:0
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25,
    },
    text1:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.black,
        fontSize:18,
    },
    view2:{
        marginTop:5,
        paddingBottom:20,
    },
    tab:{
        paddingTop:0,
        backgroundColor:colors.buttons,
        justifyContent:"space-between",
    },
    tabContainer:{
        alignItems:"center",
        alignContent:"center",
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
    scene2:{
        backgroundColor:'#673ab7',
    },

})