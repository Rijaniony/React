import React, {useState,useEffect}  from "react";
import { View,StyleSheet,FlatList,TouchableOpacity,Text,Image,Animated,Dimensions,SafeAreaView} from "react-native";

const OrderDeliveryScreen = () => {

    function renderMap(){
        return(
            <View style={{flex:1}}>
                
            </View>
        )
    }

    return(
        <View style={{flex:1}}>
            {//fonction
                renderMap()
            }
        </View>
    )
}
export default OrderDeliveryScreen;