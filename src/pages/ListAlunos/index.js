import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NetInfo from '@react-native-community/netinfo'

import api from '../../services/api'

import styles from './styles'
import AlertInternet from '../../components/AlertInternet'

export default function ListAlunos(){
    const [alunos, setAlunos] = useState([])
    const [isInternet, setIsInternet] = useState(false)

    useEffect(() => {
        api.get('/alunos').then(response => {
            setAlunos(response.data)
        })
    },[])

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setIsInternet(state.isInternetReachable)
        })
    }, [])

    const navigation = useNavigation()

    function navigationToDashboard(){
        navigation.navigate('Painel do Professor')
    }

    function navigateToResponses(){
        navigation.navigate('Respostas')
    }

    if(isInternet){
        return (
            <View style={styles.dashboardContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonAba} onPress={navigationToDashboard}>
                        <Text style={styles.textButton}>Atividades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAba} onPress={()=>{}}>
                        <Text style={styles.textButton}>Alunos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAba} onPress={navigateToResponses}>
                        <Text style={styles.textButton}>Respostas</Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.titleAlunosList}>Lista de Alunos</Text>

                <FlatList 
                    data={alunos}
                    keyExtractor={aluno => String(aluno.id)}
                    style={styles.alunoList}
                    renderItem={({ item: aluno }) => (
                        <View style={styles.containerText}>
                            <Text style={styles.nameAluno}>{aluno.name} </Text>
                            <MaterialCommunityIcons style={styles.icon} name="bookmark-check" size={25} color="#00dd00" />
                        </View>
                    )}>
                </FlatList>
            
            </View>
        )
    }else{
        return <AlertInternet />
    }
}
