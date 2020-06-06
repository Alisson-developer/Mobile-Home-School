import React, { useState } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native'

import styles from './styles'
import api from '../../services/api'

import AlertResponse from '../../components/AlertResponse'

export default function ModalResponse({isVisible, setIsVisible}){
    const [responseone, setResponseone] = useState('')
    const [responsetwo, setResponsetwo] = useState('')
    const [responsethree, setResponsethree] = useState('')
    const [responsefour, setResponsefour] = useState('')
    const [responsefive, setResponsefive] = useState('')
    const [visibility, setVisibility] = useState(false)

    
    async function handleResponses(){
        const aluno_name = await AsyncStorage.getItem('aluno')
        const exerc_id = await AsyncStorage.getItem('exerc_id')

        try {
            await api.post('/responses', {
                responseone,
                responsetwo,
                responsethree,
                responsefour,
                responsefive,
            }, { headers: { aluno_name }})
        
            if(responseone.length === 0 && responsetwo.length === 0 && responsethree.length === 0 &&
            responsefour.length === 0 && responsefive.length === 0){
                Alert.alert('Atenção!', 'Preencha todas as respostas.', [
                    { text: 'Entendi', onPress: () => {} }
                ])
            }else {
                try {
                    await api.post('/responde', {},{
                        headers: {
                            exerc_id: exerc_id,
                            resp_name: aluno_name
                        }}
                    )
                    setIsVisible(false)
                    setVisibility(true)
                } catch (error) {
                    
                }
            }
        } catch (error) {
            Alert.alert('Erro!', 'Por favor tente novamente ou verifique sua conexão com a internet.', [
                { text: 'Entendi', onPress: () => {} }
            ])
        }
    }

    return (
        <>
            <AlertResponse visibility={visibility} setVisibility={setVisibility} />
            <Modal
                style={styles.modalStyle}
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {setIsVisible(false)}}
            >
                <ScrollView style={styles.container}>
                    <Text style={styles.title} >Respostas</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#707070"
                        placeholder="Resposta da primeira questão"
                        onChangeText={setResponseone}
                        />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#707070"
                        placeholder="Resposta da segunda questão"
                        onChangeText={setResponsetwo}
                        />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#707070"
                        placeholder="Resposta da terceira questão"
                        onChangeText={setResponsethree}
                        />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#707070"
                        placeholder="Resposta da quarta questão"
                        onChangeText={setResponsefour}
                        />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#707070"
                        placeholder="Resposta da quinta questão"
                        onChangeText={setResponsefive}
                        />

                    <TouchableOpacity onPress={handleResponses} style={styles.button}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
                </ScrollView>

            </Modal>
        </>
    )
}