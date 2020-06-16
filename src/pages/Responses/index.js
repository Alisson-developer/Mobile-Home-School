import React, { useState, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, SectionList, AsyncStorage, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'

import styles from './styles'

import api from '../../services/api'

import ModalResponse from '../../components/ModalResponse'
import ButtonAlert from '../../components/ButtonAlert'
import AlertInternet from '../../components/AlertInternet'

export default function Responses(){
    const [exercises, setExercises] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [visibility, setVisibility] = useState(true)
    const [loading, setLoading] = useState(false)
    const [classe, setClasse] = useState('')
    const [isInternet, setIsInternet] = useState(false)
    
    useEffect(() => {
        api.get('/exercises').then(response => {
            setExercises(response.data)
        })
    },[])

    let id = exercises.map(exercise => exercise.id)
    for(let i of id){
        console.log(i)
        api.delete(`/exercises/${i}`).then()
    }
    
    const navigation = useNavigation()
    
    useEffect(() => {
        AsyncStorage.getItem('turma').then(turma => {
            setClasse(turma)
        })
    }, [])

    useEffect(() => {
        NetInfo.fetch().then(status => {
            setIsInternet(status.isInternetReachable)
        })
    }, [])
    
    const filteredExercises = exercises.filter(exerc => exerc.classe.includes(classe))

    if(loading){
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={100} color="#b00fff" />
            </View>
        )
    }else if(isInternet){
        return (
            <View style={styles.dashboardContainer}>
                <ButtonAlert visibility={visibility} setVisibility={setVisibility} />
                <ModalResponse isVisible={isVisible} setIsVisible={setIsVisible} />
                
                <SectionList 
                    sections={[{
                        title: 'Exercícios',
                        data: filteredExercises
                    }]}
                    keyExtractor={exercise => String(exercise.id)}
                    renderSectionHeader={({section}) =>(
                        <View style={styles.itemListHeader}>
                            <Text style={styles.titleText}>{section.title}</Text>
                        </View>
                    )}

                    renderItem={({item: exercise}) =>(
                        <View style={styles.itemList}>
                            <View style={styles.headerExercise}>
                                <View style={styles.linkWeb} >
                                    <Entypo style={styles.icon} name="laptop" size={150} color="#b00fff" onPress={
                                        async function handleContent(){
                                            setLoading(true)
                                            await AsyncStorage.setItem('content', exercise.content)
                                            navigation.navigate('Estudo')
                                            setLoading(false)
                                        }}
                                    />
                                    <Text style={styles.linkWebText}>Acessar conteúdo</Text>
                                </View>
                                <Text style={styles.labelHeaderText}><Text style={styles.strong}>Disciplina: </Text>{exercise.discipline} </Text>
                                <Text style={styles.labelHeaderText}><Text style={styles.strong}>Assunto: </Text>{exercise.title} </Text>
                            </View>

                            <Text style={styles.labelText}>{exercise.questionone}</Text>
                            <Text style={styles.labelText}>{exercise.questiontwo}</Text>
                            <Text style={styles.labelText}>{exercise.questionthree}</Text>
                            <Text style={styles.labelText}>{exercise.questionfour}</Text>
                            <Text style={styles.labelText}>{exercise.questionfive}</Text>

                            <TouchableOpacity style={styles.button} onPress={
                                    async function handleToResponse() {
                                        await AsyncStorage.setItem('exerc_id', String(exercise.id))
                                        setIsVisible(true)
                                    }}>
                                <Text style={styles.textButton}>Responder Exercício</Text>
                            </TouchableOpacity>
                            
                        </View>
                    )}
                />
                
            </View>
    )}else{
        return <AlertInternet />
    }
}
