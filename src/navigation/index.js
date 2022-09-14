import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInWelcommeScreen from "../SignInWelcomeScreen/SignInWelcomeScreen";
import Header  from '../components/Header';
import RootClientsTabs from "./ClientsTabs";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";
import GastroScreen from '../screens/GastroScreen';
import PizzaScreen from '../screens/RestaurantsTabs/PizzaScreen';
import TacosScreen from '../screens/RestaurantsTabs/TacosScreen';
import MenuScreen from "../screens/RestaurantsTabs/MenuScreen";
import MenuProductScreen from "../screens/MenuProductScreen";
import OrderDeliveryScreen from "../screens/OrderDeliveryScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                
                <Stack.Screen name="SignInWelcomeScreen" component={SignInWelcommeScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="GastroScreen" component={GastroScreen} />
                <Stack.Screen 
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="RootClientsTabs" 
                    component={RootClientsTabs} 
                    options={{
                        headerShown: false,
                    }}
                />
                

                <Stack.Screen 
                    name="RestaurantsMapScreen" 
                    component={RestaurantsMapScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
               
                
                <Stack.Screen 
                    name="PizzaScreen" 
                    component={PizzaScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="TacosScreen" 
                    component={TacosScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="MenuProductScreen" 
                    component={MenuProductScreen} 
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen 
                    name="OrderDeliveryScreen" 
                    component={OrderDeliveryScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;