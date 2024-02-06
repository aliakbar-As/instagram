import React from 'react';
import { View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const StoryCard = ({ image, username }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#CA1D7E', '#E35157', '#F2703F']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.linear}>

                <Image
                    source={{ uri: image }}
                    style={styles.userimage}
                />
            </LinearGradient>

            <Text 
            numberOfLines={1}
            style={styles.usernameTitles}>{username}</Text>
        </View>
    );
};

const styles = {
    usernameTitles: {
        marginTop: 5,
        width: '85%',
        textAlign: 'left',
        color: '#000'
    },
    userimage: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        borderColor: '#eee',
        borderWidth: 3
    },
    linear: {
        width: 82,
        height: 82,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 82 / 2,
    },
    container: {
        width: '13%',
        alignItems: 'center',
        flexDirection: 'column',
    },
};
