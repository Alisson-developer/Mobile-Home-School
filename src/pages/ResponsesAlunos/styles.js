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

    labelText: {
        fontSize: 15,
        color: '#b00fff',
        marginLeft: 20
    },
    
    headerText: {
        fontSize: 15,
        color: '#b00fff',
        fontWeight: 'bold'
    },

    headerTextTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#b00fff',
        marginVertical: 20,
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20
    },

    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#b00fff',
        marginVertical: 10,
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderColor: '#b00fff',
        paddingTop: 5,
    },

    contentList: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 10,
        paddingBottom: 20,
    }
})