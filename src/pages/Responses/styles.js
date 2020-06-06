import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    dashboardContainer: {
        flex: 1,
        backgroundColor: '#202020'
    },

    loadingContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202020'
    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b00fff',
        borderRadius: 5,
        height:50,
        marginVertical: 20
    },

    buttonResponsed: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b00fff',
        borderRadius: 100,
        paddingHorizontal: 25,
        height:50,
        marginVertical: 20
    },

    textButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    titleText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },

    itemListHeader: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    itemList: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    labelText: {
        fontSize: 18,
        color: '#b00fff',
        fontWeight: 'bold',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#b00fff',
        paddingVertical: 5
    },

    labelHeaderText: {
        fontSize: 18,
        color: '#b00fff',
        fontWeight: 'bold'
    },

    input: {
        height: 40,
        backgroundColor: '#b00fff',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 15,
        paddingHorizontal: 10,
    },

    headerExercise: {
        marginVertical: 10,
        paddingVertical: 5,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#b00fff',
    },

    strong: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    linkWeb: {
        alignSelf: 'stretch',
        borderStyle: "solid",
        borderRadius: 20,
        borderColor: '#b00fff',
        marginBottom: 20,
        paddingHorizontal: 40,
        borderWidth: 3,
        padding: 20,
    },

    icon: {
        alignSelf: 'center',
    },

    linkWebText: {
        alignSelf: 'center',
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b00fff'
    },
})