import React, { useState } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';


export const CommentSection = ({
    showCommentSheet,
    bottomSheetRef,
    handleSheetChanges,
    comments,
    usernameSelected,
    value,
    onChangeText
}) => {



    return (
        <BottomSheet
            index={showCommentSheet}
            snapPoints={['5%', '100%']}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>

                <View style={styles.bottomSheetHeader}>
                    <Text style={{ color: '#000', textAlign: 'center' }}>Comment</Text>
                </View>

                <BottomSheetScrollView>
                    <FlatList
                        data={comments}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.commentContainer}>
                                    <View style={styles.cInnerView}>
                                        <Image
                                            style={styles.commentUserImage}
                                            source={{ uri: item.image }} />

                                        <View style={{ marginLeft: 10, width: '80%' }}>
                                            <Text
                                                style={styles.mainTitles}
                                                numberOfLines={1}>{item.username} <Text style={{ color: 'grey' }}>{item.time}</Text></Text>

                                            <Text style={{ color: '#000' }}>{item.content}</Text>
                                            <Text>Reply</Text>
                                        </View>
                                    </View>

                                    <View style={{ alignItems: 'center' }}>
                                        <Icon name={'hearto'} color={'grey'} size={17} />
                                        {item.likes === 0 ? null : <Text>{item.likes}</Text>}
                                    </View>
                                </View>
                            )
                        }}
                    />
                </BottomSheetScrollView>


                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image
                            style={[styles.commentUserImage, { marginRight: 10 }]}
                            source={{ uri: 'https://www.parsnaz.com/images/2017/11/1185956851.jpg' }} />

                        <TextInput
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={`Add a comment for ${usernameSelected}`}
                        />
                    </View>

                    {value.length === 0 ?
                        <Icon
                            size={25}
                            color={'#505050'}
                            name={'instagram'} />
                        : <Text style={{ color: '#28afea' }}>Post</Text>}
                </View>
            </View>
        </BottomSheet>
    );
};

const styles = {
    mainTitles: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'stretch',
    },
    commentUserImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginTop: 6,
    },
    cInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    bottomSheetHeader: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'stretch',
        padding: 10,
        marginBottom: 10,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
}
