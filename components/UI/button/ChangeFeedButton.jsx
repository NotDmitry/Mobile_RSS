import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Entypo} from '@expo/vector-icons';

const ChangeFeedButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name="dots-three-vertical" size={26} color={'#fff'}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
    },
});

export default ChangeFeedButton;