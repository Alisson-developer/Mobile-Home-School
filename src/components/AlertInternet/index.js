import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function AlertInternet(){
    return (
        <View style={styles.shadowAlert}>
            <View style={styles.alertView}>
            <Text style={styles.title}>Erro de conexão!</Text>
                <Feather style={styles.wifiIcon} name="wifi-off" size={30} color="black" />
                <Text style={styles.textContent}>Verifique sua conexão com a internet e tente novamente.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    shadowAlert: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000dd',
        height: '100%',
        zIndex: 1
    },

    alertView: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 10,
        paddingVertical: 10,
    },

    title: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'orange'
    },

    wifiIcon: {
        alignSelf: 'center',
        color: '#b00fff'
    },

    textContent: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 5,
        marginVertical: 15,
    },
})