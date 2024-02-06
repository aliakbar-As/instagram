import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');



export const PostCard = ({
    body,
    username,
    userimage,
    likesCount,
    commentsCount,
    time,
    images,
    likeOnclick,
    commentOnclick,
    sendOnclick,
    saveOnclick,
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.topSection}>
                <View style={styles.userStuff}>
                    <Image
                        style={styles.userimage}
                        source={{ uri: userimage }} />
                    <Text
                        numberOfLines={1}
                        style={styles.username}>{username}</Text>
                </View>

                <Icon
                    color={'#242424'}
                    size={15}
                    name={'ellipsis-v'} />
            </View>



            <Swiper
                paginationStyle={styles.paginationStyle}
                style={{ marginTop: 10 }}
                height={400}
            >
                {images.map((item, index) => {
                    return (
                        <View key={index} >
                            <Image
                                style={styles.mainImages}
                                source={{ uri: item }}
                            />
                        </View>
                    )
                })}
            </Swiper>

            <View style={styles.pView}>
                <View style={styles.leftIconView}>
                    <Icon
                        name={'heart-o'}
                        color={'#000'}
                        size={23}
                        style={styles.leftIcons}
                        onPress={likeOnclick}
                    />

                    <Icon
                        name={'comment-o'}
                        color={'#000'}
                        size={23}
                        onPress={commentOnclick}
                        style={styles.leftIcons}
                    />

                    <Icon
                        name={'send-o'}
                        color={'#000'}
                        size={23}
                        onPress={sendOnclick}
                        style={styles.leftIcons}
                    />
                </View>


                <Icon
                    name={'bookmark-o'}
                    color={'#000'}
                    size={25}
                    onPress={sendOnclick}
                    style={{ marginHorizontal: 16 }}
                />
            </View>

            <View style={{ padding: 10 }}>
                <View>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>
                        {likesCount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} likes
                    </Text>

                    <Text style={{ color: '#000', fontWeight: 'bold' }}>{username} <Text style={{ fontWeight: 'normal' }}>{body}</Text></Text>

                    <Text style={{ marginTop: 10 }}>View all {commentsCount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} comments</Text>
                </View>

                <View style={[styles.userStuff, { marginVertical: 10 }]}>
                    <Image
                        source={{ uri: userimage }}
                        style={styles.userimage} />

                    <Text style={styles.username}>Add a comment...</Text>
                </View>

                <Text>{time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    leftIcons: {
        marginHorizontal: -5,
        margin: -16,
        padding: 16,
    },
    leftIconView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    pView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    paginationStyle: {
        bottom: -20,
        left: 0,
        right: 0,
    },
    mainImages: {
        width: '100%',
        height: 380,
        alignSelf: 'center'
    },
    username: {
        color: '#2d2d2d',
        width: '70%',
    },
    userimage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    userStuff: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%',

    },
    container: {
        paddingTop: 16,
        backgroundColor: '#fff',
    }
})