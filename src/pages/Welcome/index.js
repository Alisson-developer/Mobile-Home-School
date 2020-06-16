import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'


export default function Welcome(){

    const navigation = useNavigation()

    useEffect(() => {
        AsyncStorage.getItem('prof_id').then(prof => {
            if (prof) {
                navigation.navigate('Painel do Professor')
            }
        })
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('aluno').then(alun => {
            if(alun){
                navigation.navigate('Lista de Exercícios')
            }
        })
    }, [])


    function navigationToAlunos(){
        navigation.navigate('Alunos')
    }
    
    function navigationToProfessores(){
        navigation.navigate('Professores')
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastrar-se como:</Text>
                <TouchableOpacity style={styles.button} onPress={navigationToAlunos}>
                    <Text style={styles.buttonText}>Aluno</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={navigationToProfessores}>
                    <Text style={styles.buttonText}>Professor</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}