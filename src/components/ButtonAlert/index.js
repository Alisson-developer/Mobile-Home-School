import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default function AlertResponse({ visibility, setVisibility }){
    return (
        <View style={visibility ? styles.shadowAlert: styles.alertNone}>
            <View style={styles.alertView}>
                <Text style={styles.title}>Atenção!</Text>
                <Text style={styles.textContent}>Os exercícios ficarão dosponíveis por apenas 48 horas.</Text>
                <TouchableOpacity style={styles.button} onPress={() => setVisibility(false)}>
                    <Text style={styles.textButton}>Entendi</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    alertNone: {
        display: 'none'
    },

    shadowAlert: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000dd',
        height: '100%',
        
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

    textContent: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 5,
        marginVertical: 15,
    },

    button: {
        alignSelf: 'stretch',
        backgroundColor: '#b00fff',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        borderStyle: 'solid',
        paddingVertical: 5
    }
})