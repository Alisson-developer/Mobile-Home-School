import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'

import styles from './styles'
import api from '../../services/api'
import AlertInternet from '../../components/AlertInternet'

export default function ExerciseResponse(){
    const [exercises, setExercises] = useState([])
    const [isInternet, setIsInternet] = useState(false)

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setIsInternet(state.isInternetReachable)
        })
    }, [])

    useEffect(() => {
        api.get('/responde').then(resp => {
            setExercises(resp.data)
        })
    }, [])

    useEffect(() => {
        let id = exercises.map(exercise => exercise.id)
        for(let i of id){
            api.delete(`/responde/${i}`).then()
        }
    }, [])

    const navigation = useNavigation()

    function navigationToDashboard(){
        navigation.navigate('Painel do Professor')
    }
    function navigateToListAlunos(){
        navigation.navigate('Alunos Cadastrados')
    }

    if(isInternet){
        return (
            <View style={styles.dashboardContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonAba} onPress={navigationToDashboard}>
                        <Text style={styles.textButton}>Atividades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAba} onPress={navigateToListAlunos}>
                        <Text style={styles.textButton}>Alunos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAba} onPress={() => {}}>
                        <Text style={styles.textButton}>Respostas</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Exerícios Respondidos</Text>

                <FlatList
                    data={exercises}
                    keyExtractor={exercise => String(exercise.aluno_name)}
                    renderItem={({ item: exercise }) => (
                        <View style={styles.contentList}>
                            <Text style={styles.headerTextTitle}>Disciplina {exercise.discipline} </Text>
                            <Text style={styles.headerText}>ALUNO(A) - {exercise.aluno_name} </Text>
                            <Text style={styles.headerText}>TURMA - {exercise.classe} </Text>
                            <Text style={styles.headerText}>ASSUNTO - {exercise.title} </Text>
                            <Text style={styles.headerText}>CONTEUDO - {exercise.content} </Text>
                            
                            <Text style={styles.subTitle}>Questões</Text>

                            <Text style={styles.labelText}>1 - {exercise.questionone} </Text>
                            <Text style={styles.labelText}>2 - {exercise.questiontwo} </Text>
                            <Text style={styles.labelText}>3 - {exercise.questionthree} </Text>
                            <Text style={styles.labelText}>4 - {exercise.questionfour} </Text>
                            <Text style={styles.labelText}>5 - {exercise.questionfive} </Text>

                            <Text style={styles.subTitle}>Respostas</Text>

                            <Text style={styles.labelText}>1 - {exercise.responseone} </Text>
                            <Text style={styles.labelText}>2 - {exercise.responsetwo} </Text>
                            <Text style={styles.labelText}>3 - {exercise.responsethree} </Text>
                            <Text style={styles.labelText}>4 - {exercise.responsefour} </Text>
                            <Text style={styles.labelText}>5 - {exercise.responsefive} </Text>
                        </View>
                        )}>
                </FlatList>
            </View>
        )
    }else{
        return <AlertInternet />
    }
}