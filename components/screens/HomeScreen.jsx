import {useNavigation} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, RefreshControl, StatusBar, StyleSheet, View} from 'react-native'

import {parseFeed} from '../../services/RSSParser'
import {useFetching} from '../../hooks/useFetching'
import PostPreviewItem from '../PostPreviewItem'
import ChangeFeedModal from "../ChangeFeedModal";
import ChangeFeedButton from "../UI/button/ChangeFeedButton";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [rssChangeVisible, setRssChangeVisible] = useState(false);
    const [feeds, setFeeds] = useState([
        {
            id: 0,
            title: 'Playstation',
            url: 'https://blog.playstation.com/feed/',
        },
        {
            id: 1,
            title: 'NASA Image of the Day',
            url: 'http://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss',
        },
        {
            id: 2,
            title: 'Onliner',
            url: 'http://www.onliner.by/feed',
        },
        {
            id: 3,
            title: 'Blender 3D',
            url: 'https://www.blender.org/feed/',
        }
    ]);
    const [rss, setRss] = useState(feeds[0]);

    const [fetchNews, isLoading, error] = useFetching(async () => {
        const rssFeed = await parseFeed(rss);
        const title = rssFeed.title;
        navigation.setOptions({
            title: title,
        })
        const items = rssFeed.items;
        setData(items);
    })

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <ChangeFeedButton onPress={() => setRssChangeVisible(true)} />
            ),
            title: 'Loading...'
        })
        fetchNews();
    }, [rss])

    return (
        <SafeAreaView style={styles.container}>
            {isLoading
                ? <View style={styles.indicator}>
                    <ActivityIndicator size={'large'} color={'#ac17cc'} />
                </View>
                : <FlatList
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchNews} />}
                    data={data}
                    renderItem={({ item }) => {
                        return <PostPreviewItem feedItem={item}/>;
                    }}
                />}
            <ChangeFeedModal
                isVisible={rssChangeVisible}
                setIsVisible={setRssChangeVisible}
                setFeed={setRss}
                feeds={feeds}
            />

            <StatusBar style="auto"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    }
});
export default HomeScreen;