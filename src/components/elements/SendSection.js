import React from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Dimensions, FlatList, Image, Text, TextInput, View } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';
import { Input } from '../common';


const footerItem = [
    {
        id: 0,
        title: 'Add to story',
        icon: 'pluscircleo'
    },
    {
        id: 1,
        title: 'Share',
        icon: 'sharealt'
    },
    {
        id: 2,
        title: 'Copy link',
        icon: 'link'
    },
    {
        id: 3,
        title: 'SMS',
        icon: 'message1'
    },
    {
        id: 4,
        title: 'Messenger',
        icon: 'copyright'
    },
    {
        id: 5,
        title: 'WhatsApp',
        icon: 'phone'
    },
    {
        id: 6,
        title: 'Snapchat',
        icon: 'aliwangwang-o1'
    },
    {
        id: 7,
        title: 'Facebook',
        icon: 'facebook-square'
    },
    {
        id: 8,
        title: 'Twitter',
        icon: 'wechat'
    },
];

const widthScreen = Dimensions.get('window').width;

export const SendSection = ({
    showSendSheet,
    bottomSheetRef,
    handleSheetChanges,
    followers,
    value,
    onChangeText
}) => {



    return (
        <BottomSheet
            index={showSendSheet}
            snapPoints={['5%', '100%']}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>

                <BottomSheetScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        search
                        value={value}
                        onChangeText={onChangeText}
                    />





                    <View style={styles.main}>
                        <View style={styles.groupIconView}>
                            <Icon
                                size={30}
                                coor={'#000'}
                                name={'addusergroup'} />
                        </View>

                        <Text style={styles.groupTitle}>Create group</Text>
                    </View>
                    <FlatList
                        data={followers}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.cardsection}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                        <View style={{ position: 'relative' }}>
                                            <Image
                                                style={styles.userImage}
                                                source={{ uri: item.image }} />

                                            {item.online ?
                                                <View style={styles.onlineView} />
                                                : null}
                                        </View>

                                        <View style={styles.textContainers}>
                                            <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                            <Text numberOfLines={1} style={{ color: '#aeaeae' }}>{item.username}</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={styles.selectedView} />
                                </View>
                            )
                        }}
                    />
                </BottomSheetScrollView>


                <View style={styles.footer}>

                    <BottomSheetScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {footerItem.map((item, index) => {
                            return (
                                <View key={index} style={styles.mainCircles}>
                                    <View style={styles.circleView}>
                                        <Icon
                                            size={25}
                                            color={'#000'}
                                            name={item.icon} />
                                    </View>

                                    <Text
                                        numberOfLines={2}
                                        style={[styles.titles, { width: item.id === 0 ? '90%' : '100%' }]}>{item.title}</Text>
                                </View>
                            )
                        })}
                    </BottomSheetScrollView>
                </View>
            </View>
        </BottomSheet>
    );
};

const styles = {
    groupTitle: {
        color: '#000', fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    groupIconView: {
        borderWidth: 1, borderColor: '#ddd',
        justifyContent: 'center', alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50
    },
    onlineView: {
        backgroundColor: '#46d809',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 15, height: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff'
    },
    textContainers: {
        flexDirection: 'column',
        width: '70%',
        marginLeft: 10,
        alignItems: 'flex-start'
    },
    selectedView: {
        width: 30, height: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#505050'
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 6
    },
    titles: {
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#000',
        height: 40,
        marginTop: 16
    },
    mainCircles: {
        flexDirection: 'column',
        alignItems: 'center',
        width: widthScreen / 5,
        justifyContent: 'center',
    },
    circleView: {
        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'stretch',
    },
    cardsection: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
}
