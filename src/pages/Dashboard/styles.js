import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: '#202020'
    },

    header: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },

    buttonAba: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b00fff',
        height: 55,
    },

    textButton: {
        color: '#fff'
    },

    form: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },

    labelText: {
        fontSize: 18,
        color: '#b00fff',
        fontWeight: 'bold'
    },

    input: {
        paddingLeft: 10,
        marginVertical: 15,
        height: 50,
        borderRadius: 5,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#b00fff',
        color: '#b00fff'
    },

    topTitle: {
        color: '#b00fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20
    },
    
    middleTitle: {
        color: '#b00fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20
    },

    buttonRegister: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b00FFF',
        height: 50,
        marginTop: 20,
        marginBottom: 80,
        borderRadius: 5
    },

    textButtonRegister: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    piker:{
        marginVertical: 20,
    },
})