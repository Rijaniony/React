import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientsTabs from './ClientsTabs';
import { Icon } from 'react-native-elements';
import {colors} from '../screens/global/styles';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => { 

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='RootClientsTabs'
                component={RootClientsTabs}

                options={{
                    title: 'Client',
                    drawerIcon : ({focussed,size}) => (
                        <Icon
                            type='material-community'
                            name='home'
                            color= {focussed ? '#7cc' : colors.grey2}
                            size ={size}
                        />
                    )
                }}
            />

           

        </Drawer.Navigator>
    )
}
export default DrawerNavigator;