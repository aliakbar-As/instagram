import React from "react";
import { TextInput, View } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';

export const Input = ({
    search,

    value,
    onChangeText,
}) => {

    if (search) {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon
                        size={20}
                        color={'grey'}
                        name={'search1'} />

                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder="Search"
                        style={{ width: '80%' }}
                    />
                </View>


                <Icon
                    size={25}
                    coor={'grey'}
                    name={'addusergroup'} />
            </View>
        )
    }
    return (
        <View />
    );
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EFEFEF',
        borderRadius: 16,
        paddingHorizontal: 10
    },
}