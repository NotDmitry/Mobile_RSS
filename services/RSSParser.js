import {parse} from 'react-native-rss-parser';

export async function parseFeed(feed) {
    const response = await fetch(feed.url);
    const data = await response.text();
    const rssFeed = await parse(data);
    return rssFeed;
}