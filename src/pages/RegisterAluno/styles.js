import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    containerRegister: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#202020'
    },

    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#b00fff',
        marginVertical: 20
    },

    form: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        bottom: 20,
        backgroundColor: '#fff',
        marginVertical: 50,
        borderRadius: 20
    },

    labelInput: {
        fontSize: 18,
        color: '#b00fff'
    },

    input: {
        height: 50,
        backgroundColor: '#b00fff',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 15,
        paddingHorizontal: 10,
        color: '#fff'
    },
    
    Button: {
        backgroundColor: '#b00fff',
        alignItems: 'center',
        marginTop: 20,
        width: 250,
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    textButton: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    }
})