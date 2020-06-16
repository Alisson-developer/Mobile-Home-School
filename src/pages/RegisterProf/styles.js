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
        alignSelf: 'center',
        fontSize: 38,
        fontWeight: 'bold',
        color: '#b00fff',
        marginVertical: 20,
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginVertical: '50%',
        borderRadius: 20
    },

    labelInput: {
        fontSize: 18,
        color: '#b00fff'
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 10,
        marginBottom: 20,
        marginLeft: 15,
        paddingHorizontal: 10,
        color: '#b00fff',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#b00fff'
    },
    
    Button: {
        backgroundColor: '#b00fff',
        alignItems: 'center',
        width: 250,
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10
    },

    textButton: {
        fontSize: 22,
        color: '#fff'
    }
})