import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from "../components/screens/authScreens/Splash";
import TabScreens from "./TabScreens/TabScreens";

const Stack = createNativeStackNavigator();

export default RouterComponent = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="splash"
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen
                    name="splash"
                    component={Splash}
                />

                <Stack.Screen
                    name="tabScreens"
                    component={TabScreens}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}