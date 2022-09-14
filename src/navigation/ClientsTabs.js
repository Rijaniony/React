import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../screens/global/styles';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { StyleSheet } from 'react-native';

const ClientsTabs = createBottomTabNavigator();

const RootClientsTabs = () => {

    return (
        <ClientsTabs.Navigator
            tabBarOptions = {{
                activeTintColor : colors.buttons,
            }}
        >
            <ClientsTabs.Screen
                name="HomeScreen" 
                component={HomeScreen}
               
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "Home",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size = {size}
                                style ={
                                    {
                                        width:25,
                                        height:25,
                                    }
                                }
                            />
                        )
                        
                    }
                }
            />

            <ClientsTabs.Screen
                name="SearchScreen" 
                component={SearchScreen}
               
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "Search",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size = {size}
                                style ={
                                    {
                                        width:25,
                                        height:25,
                                    }
                                }
                            />
                        )
                        
                    }
                }
            />

            <ClientsTabs.Screen
                name="MyOrderScreen" 
                component={MyOrderScreen}
               
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "View List",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size = {size}style ={
                                    {
                                        width:25,
                                        height:25,
                                    }
                                }
                            />
                        )
                        
                    }
                }
            />

            <ClientsTabs.Screen
                
                name="MyAccountScreen" 
                component={MyAccountScreen}
               
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "My Account",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size = {size}
                                style ={
                                    {
                                        width:25,
                                        height:25,
                                    }
                                }
                            />
                        )
                        
                    }
                }
            />
           
            
        </ClientsTabs.Navigator>
    )
}


export default RootClientsTabs;