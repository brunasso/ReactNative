import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


export const Header = ({title}) => {

    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle} >{title}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        paddingTop: 35,
        backgroundColor: '#43e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 22
    }
})