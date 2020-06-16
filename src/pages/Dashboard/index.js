import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, TouchableOpacity, AsyncStorage} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-community/picker'
import NetInfo from '@react-native-community/netinfo'

import api from '../../services/api'

import styles from './styles'
import AlertView from '../../components/Alert'
import AlertError from '../../components/AlertError'
import AlertCheck from '../../components/AlertCheck'
import ButtonAlert from '../../components/ButtonAlert'
import AlertInternet from '../../components/AlertInternet'

export default function Welcome(){
    const [classe, setClasse] = useState('')
    const [discipline, setDiscipline] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [questionone, setQuestionone] = useState('')
    const [questiontwo, setQuestiontwo] = useState('')
    const [questionthree, setQuestionthree] = useState('')
    const [questionfour, setQuestionfour] = useState('')
    const [questionfive, setQuestionfive] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [isVisibility, setIsVisibility] = useState(false)
    const [initVisibility, setInitVisibility] = useState(true)

    const [isInternet, setIsInternet] = useState(false)
    
    const navigation = useNavigation()

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setIsInternet(state.isInternetReachable)
        })
    }, [])
    
    async function handleExercise(){
        try {
            if(classe.length === 0 || discipline.length === 0 ||
                title.length === 0 || content.length === 0 || questionone.length === 0 ||
                questiontwo.length === 0 || questionthree.length === 0 ||
                questionfour.length === 0 || questionfive.length === 0){
                setIsVisibility(true)
            }else{
                const prof_id = await AsyncStorage.getItem('prof_id')
                await api.post('/exercises', {
                    classe,
                    discipline,
                    title,
                    content,
                    questionone,
                    questiontwo,
                    questionthree,
                    questionfour,
                    questionfive,
                }, { headers: {prof_id: prof_id}
                })
                setIsVisible(true)
            }
        } catch (error) {
            setVisibility(true)
        }
    }

    function navigateToListAlunos(){
        navigation.navigate('Alunos Cadastrados')
    }

    function navigateToResponses(){
        navigation.navigate('Respostas')
    }

    if(isInternet){
        return (
            <>
                <ButtonAlert visibility={initVisibility} setVisibility={setInitVisibility} />
                <AlertView isVisible={isVisible} setIsVisible={setIsVisible} />
                <AlertError visibility={visibility} setVisibility={setVisibility} />
                <AlertCheck isVisibility={isVisibility} setIsVisibility={setIsVisibility} />

                <View style={styles.dashboardContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.buttonAba} onPress={() => {}}>
                            <Text style={styles.textButton}>Atividades</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAba} onPress={navigateToListAlunos}>
                            <Text style={styles.textButton}>Alunos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAba} onPress={navigateToResponses}>
                            <Text style={styles.textButton}>Respostas</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.form}>

                        <Text style={styles.topTitle}>Especificações</Text>

                        <Text style={styles.labelText}>Turma que receberá o exercício *</Text>
                        
                        <Picker
                            style={styles.piker}
                            mode="dropdown"
                            selectedValue={classe}
                            onValueChange={setClasse}
                            >

                            <Picker.Item label="Selecione a Turma" value="" />
                            <Picker.Item label="M5A" value="M5A" />
                            <Picker.Item label="M7A" value="M7A" />
                            <Picker.Item label="M7B" value="M7B" />
                            <Picker.Item label="M1A" value="M1A" />
                            <Picker.Item label="M1B" value="M1B" />
                            <Picker.Item label="M2A" value="M2A" />
                            <Picker.Item label="M2B" value="M2B" />
                            <Picker.Item label="M3A" value="M3A" />
                            <Picker.Item label="Proeja M3A" value="Proeja M3A" />
                            <Picker.Item label="Proeja M3B" value="Proeja M3B" />
                        </Picker>


                        <Text style={styles.labelText}>Disciplina *</Text>
                        <TextInput style={styles.input} value={discipline} onChangeText={setDiscipline} />

                        <Text style={styles.labelText}>Titulo do exercício *</Text>
                        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

                        <Text style={styles.labelText}>Conteudo - Link para site ou video do Youtube *</Text>
                        <TextInput style={styles.input} value={content} onChangeText={setContent} />


                        <Text style={styles.middleTitle}>Questões</Text>

                        <Text style={styles.labelText}>Primeira questão *</Text>
                        <TextInput
                            style={styles.input}
                            value={questionone}
                            onChangeText={setQuestionone}
                            multiline={true}
                            textAlignVertical="top"
                            />

                        <Text style={styles.labelText}>Segunda questão *</Text>
                        <TextInput
                            style={styles.input}
                            value={questiontwo}
                            onChangeText={setQuestiontwo}
                            multiline={true}
                            textAlignVertical="top"
                            />

                        <Text style={styles.labelText}>Terceira questão *</Text>
                        <TextInput
                            style={styles.input}
                            value={questionthree}
                            onChangeText={setQuestionthree}
                            multiline={true}
                            textAlignVertical="top"
                            />

                        <Text style={styles.labelText}>Quarta questão *</Text>
                        <TextInput
                            style={styles.input}
                            value={questionfour}
                            onChangeText={setQuestionfour}
                            multiline={true}
                            textAlignVertical="top"
                            />

                        <Text style={styles.labelText}>Quinta questão *</Text>
                        <TextInput
                            style={styles.input}
                            value={questionfive}
                            onChangeText={setQuestionfive}
                            multiline={true}
                            textAlignVertical="top"
                            />


                        <TouchableOpacity style={styles.buttonRegister} onPress={handleExercise}>
                            <Text style={styles.textButtonRegister}>Publicar</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </>
        )
    }else{
        return <AlertInternet />
    }
}