import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const ModalView = ({children, isVisible, setIsVisible, callback}) => {
    const OkButtonPress = () => {
        setIsVisible(!isVisible);
        callback?.();
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setIsVisible(!isVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                    <TouchableOpacity
                        onPress={OkButtonPress}
                        style={styles.button}>
                        <Text style={styles.text}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalView

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: '#FFFFFF',
        maxHeight: '80%',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        elevation: 10,
    },
    button: {
        backgroundColor: '#a213b4',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        height: 40,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
})