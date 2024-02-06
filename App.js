import React, { useEffect } from "react";
import { LogBox, StatusBar } from 'react-native';

import Routes from "./src/Routers/Routes";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

    useEffect(() => {
        LogBox.ignoreAllLogs();
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#fff'} />


            <Routes />
        </GestureHandlerRootView>
    );
}

export default App;