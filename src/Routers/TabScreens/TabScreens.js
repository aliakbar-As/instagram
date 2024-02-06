import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyTabBar from './MyTabBar';

import HomeScreens from './HomeScreens';

const Tab = createBottomTabNavigator();


export default TabScreens = () => {

    return (
        <Tab.Navigator
            initialRouteName='homeScreens'
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name='homeScreens'
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Home',
                    iconName: 'home',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name='searchScreens'
                component={HomeScreens}

                options={{
                    tabBarLabel: 'Homes2',
                    iconName: 'search1',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name='addScreens'
                component={HomeScreens}

                options={{
                    tabBarLabel: 'Homes3',
                    iconName: 'plussquareo',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name='reelsScreens'
                component={HomeScreens}

                options={{
                    tabBarLabel: 'Homes3',
                    iconName: 'playcircleo',
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name='profileScreens'
                component={HomeScreens}

                options={{
                    tabBarLabel: 'Homes3',
                    iconName: 'user',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
};