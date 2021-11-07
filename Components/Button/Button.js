import { text } from 'express';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export const Buttons = ({text}) => {
    
    return(
        <View>
            <TouchableOpacity style={styles.touchable}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({
    touchable: { width: 10, height: 10 },
    text: {fontSize: 20}
})