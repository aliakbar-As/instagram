import React from "react";
import { Image, Platform, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const mainIcon = require('../../assets/images/logo.png')

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.mainIcon}
                source={mainIcon}
            />


            <View style={styles.rightSide}>
                <Icon
                    name={'heart'}
                    size={25}
                    color={'#000'}
                    style={{ marginRight: 10 }}
                />


                <View>
                    <View style={styles.badge}>
                        <Text style={{ color: '#fff' }}>4</Text>
                    </View>

                    <Icon
                        name={'send'}
                        size={30}
                        color={'#000'}
                        style={{ marginHorizontal: 10 }}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = {
    badge: {
        backgroundColor: 'red',
        borderRadius: 100,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: -5,
        top: -10,
        zIndex: 1,
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainIcon: {
        width: 120,
        height: 85
    },
    container: {
        height: Platform.OS === 'android' ? 50 : 45,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 5
    },
};
