import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const PostPreviewItem = ({feedItem}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.mainView, styles.shadow]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('PostWebView', {item: feedItem})}
        >
            <Text style={styles.title}>{feedItem.title.trim()}</Text>
            <Text style={styles.author}>
                By: {
                feedItem.authors[0] !== undefined
                    ? feedItem.authors[0].name
                    : 'Author unknown'
            }
            </Text>
            <Text style={styles.date}>
                Published on: {
                feedItem.published !== undefined
                    ? feedItem.published
                    : 'Unknown'
            }
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainView: {
        marginVertical: 10,
        marginHorizontal: 8,
        width: "auto",
        borderRadius: 8,
        padding: 6,
        backgroundColor: "#ffd3ff",
    },
    title: {
        fontSize: 20,
        color: "#0d0810",
        marginBottom: 10,
        fontWeight: '400',
        paddingLeft: 15,
        paddingBottom: 10,
        borderBottomColor: '#737171',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    shadow: {
        shadowColor: '#720b6a',
        elevation: 5,
    },
    author: {
        color: '#565454',
        fontSize: 15,
        paddingBottom: 5,
        paddingLeft: 15,
        marginBottom: 3,

    },
    date: {
        color: '#737171',
        fontSize: 14,
        paddingBottom: 5,
        paddingLeft: 15,
        marginBottom: 3,
    },
});

export default PostPreviewItem