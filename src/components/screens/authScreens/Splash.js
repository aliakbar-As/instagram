import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { CommonActions } from '@react-navigation/native';

const splashIcon = require('../../../assets/images/splash.png');
const meta = require('../../../assets/images/meta.png');

export default Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    routes: [{ name: 'tabScreens' }]
                })
            )
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                source={splashIcon}
                style={styles.mainIcon}
            />

            <View style={styles.footer}>
                <Text style={styles.title}>from</Text>

                <Image
                    resizeMode="contain"
                    source={meta}
                    style={styles.metaIcon}
                />
            </View>
        </View>
    );
};

const styles = {
    title: {
        color: '#7D8587',
        textAlign: 'center',
        fontSize: 14,
    },
    footer: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 0,
        left: 0
    },
    metaIcon: {
        width: 100,
        marginTop: 0,
        height: 45,
        alignSelf: 'center',
    },
    mainIcon: {
        width: 85,
        height: 85,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
