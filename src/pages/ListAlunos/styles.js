import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: '#fff',
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

    titleAlunosList: {
        alignSelf: 'center',
        marginVertical: 10,
        color: '#b00fff',
        fontSize: 30,
        fontWeight: 'bold'

    },

    alunoList: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },

    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 5,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#b00fff'
    },

    nameAluno: {
        color:'#b00fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 3,
        fontSize: 15,
    },

    icon: {
        margin: 15
    },
})