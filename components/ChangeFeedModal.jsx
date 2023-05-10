import React, {useState} from 'react'
import ModalView from './UI/modal/ModalView'
import {StyleSheet, Text, View} from "react-native";
import {RadioButton} from "react-native-paper";

const ChangeFeedModal = ({isVisible, setIsVisible, setFeed, feeds}) => {
    const [checked, setChecked] = useState(0);

    const SaveRss = () => {
        setFeed(feeds[checked]);
    }

    return (
        <ModalView isVisible={isVisible} setIsVisible={setIsVisible} callback={SaveRss}>
            <Text style={styles.modalText}>Feeds</Text>
            <View>
                {feeds.map((item, index) =>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton
                            value={item.title}
                            onPress={() => setChecked(index)}
                            key={index}
                            status={ checked === index ? 'checked' : 'unchecked'}
                        />
                        <Text style={styles.radioText}>{item.title}</Text>
                    </View>
                )}
            </View>
        </ModalView>
    )
}

const styles = StyleSheet.create({
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '700'
    },
    radioText: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: '500'
    }
});

export default ChangeFeedModal

