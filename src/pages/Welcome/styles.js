import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'center'
    },

    content: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        alignItems: 'center',
        borderRadius: 10
    },

    title: {
        fontSize: 28,
        color: '#b00fff',
        fontWeight: 'bold',
        marginVertical: 20
    },

    button: {
        backgroundColor: '#b00fff',
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 10
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
})