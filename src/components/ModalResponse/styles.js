import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: '#fffffffb',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title:{
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: "bold",
        color: "#b00fff",
        marginVertical: 10,
        marginTop: 20,
    },

    input: {
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#b00fff',
        borderRadius: 10,
        height: 50,
        color: '#b00fff'
    },

    button: {
        backgroundColor: '#b00fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
    },

    textButton: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
})