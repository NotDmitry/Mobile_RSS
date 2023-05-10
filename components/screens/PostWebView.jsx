import React, {useEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import WebView from "react-native-webview";

const PostWebView = ({route}) => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: route.params.item.title.trim(),
        })
    }, []);

    return (
        <WebView source={{ uri: route.params.item.links[0].url }}/>
    )

}

export default PostWebView;