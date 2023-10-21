import {StyleSheet, View} from 'react-native';
import Te from "@/components/te";
import React from 'react';


export default function Index() {
    return (
        <View style={styles.container} className="bg-orange-500" >
            <Te/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
