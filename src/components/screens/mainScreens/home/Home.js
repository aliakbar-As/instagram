import React, { useRef, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Header } from "../../../../components/common";

import stories from '../../../../assets/data/story.json';
import posts from '../../../../assets/data/posts.json';

import { StoryCard, PostCard, CommentSection, SendSection } from "../../../elements";

import Icon from 'react-native-vector-icons/AntDesign';

import comments from '../../../../assets/data/comments.json';
import followers from '../../../../assets/data/followers.json';

const Home = () => {

    const bottomSheetRef = useRef(null);
    const sendSheetRef = useRef(null);

    const [showSendSheet, setShowSendSheet] = useState(-1);
    const [showCommentSheet, setShowCommentSheet] = useState(-1);

    const [search, setSearch] = useState('');
    const [comment, setComment] = useState('');

    const [usernameSelected, setUsernameSelected] = useState('');


    const handleSheetChanges = (index) => {
        if (index === 0) {
            bottomSheetRef.current.close();
            setShowCommentSheet(-1);
        } else {
            setShowCommentSheet(index);
        }
    };





    const handleSendSheetChanges = (index) => {
        if (index === 0) {
            sendSheetRef.current.close();
            setShowSendSheet(-1);
        } else {
            setShowSendSheet(index);
        }
    };

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.storySection}>
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}>


                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={{ position: 'relative' }}>
                            <Image
                                style={styles.userimage}
                                source={{ uri: 'https://www.parsnaz.com/images/2017/11/1185956851.jpg' }} />

                            <Icon
                                style={styles.plusIcon}
                                size={25}
                                color={'#019CFF'}
                                name={'pluscircle'} />
                        </View>

                        <Text
                            numberOfLines={1}
                            style={styles.storyMainTitle}>Your Story</Text>
                    </View>

                    {stories.map((item, index) => {
                        return (
                            <StoryCard
                                key={index}
                                image={item.image}
                                username={item.username}
                            />

                        )
                    })}
                </ScrollView>
            </View>



            <FlatList
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <PostCard
                            title={item.title}
                            body={item.body}
                            time={item.time}
                            commentsCount={item.comments.toString()}
                            likesCount={item.likes.toString()}
                            images={item.images}
                            userimage={item.userimage}
                            username={item.username}
                            commentOnclick={() => { setShowCommentSheet(1); setUsernameSelected(item.username) }}

                            sendOnclick={() => setShowSendSheet(1)}

                        />
                    )
                }}
            />

            <CommentSection
                showCommentSheet={showCommentSheet}
                bottomSheetRef={bottomSheetRef}
                handleSheetChanges={handleSheetChanges}
                comments={comments}
                value={comment}
                onChangeText={value => setComment(value)}
                usernameSelected={usernameSelected}
            />


            <SendSection
                showSendSheet={showSendSheet}
                bottomSheetRef={sendSheetRef}
                handleSheetChanges={handleSendSheetChanges}
                followers={followers}
                value={search}
                onChangeText={value => setSearch(value)}
            />
        </View>
    );
};

const styles = {
    storySection: {
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 16,
    },
    storyMainTitle: {
        marginTop: 5,
        textAlign: 'left',
        color: '#000'
    },
    plusIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 100
    },
    userimage: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        borderColor: '#ccc',
        borderWidth: 2
    },
    mainStoryView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginleft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}
export default Home;