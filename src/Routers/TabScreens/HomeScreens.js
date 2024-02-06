import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from "../../components/screens/mainScreens/home/Home";


const Stack = createNativeStackNavigator();


export default HomeScreens = () => {

    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name="home"
                component={Home}
            />






        </Stack.Navigator>
    )
}