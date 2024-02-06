import React, { useEffect } from "react";
import { Dimensions, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'


const widthScreen = Dimensions.get('window').width;

export default MyTabBar = ({ state, descriptors, navigation }) => {


    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((item, index) => {

                const { options } = descriptors[item.key];


                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: item.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: item.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                      type: 'tabLongPress',
                      target: item.key,
                    });
                  };
          


                return (
                    <TouchableWithoutFeedback
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessiBilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >

                        <View style={styles.tabContainer}>
                            <Icon
                                name={options.iconName}
                                size={25}
                                style={{ alignSelf: 'center' }}
                                color={isFocused ? '#000' : 'grey'}
                            />

                        </View>
                    </TouchableWithoutFeedback>
                )
            })}

        </View>
    );
};

const styles = {
    tabContainer: {
        paddingVertical: 10,
        width: widthScreen / 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
};