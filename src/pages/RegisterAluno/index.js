import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-community/picker'
import NetInfo from '@react-native-community/netinfo'

import styles from './styles'
import api from '../../services/api'
import AlertInternet from '../../components/AlertInternet'

export default function RegisterAluno(){
    const [name, setName] = useState('')
    const [classe, setClasse] = useState('')
    const [isInternet, setIsInternet] = useState(false)

    const navigation = useNavigation()
    

    useEffect(() => {
        NetInfo.fetch().then(status => {
            setIsInternet(status.isInternetReachable)
        })
    }, [])


    async function handleRegisterAluno(){
        if(classe.length === 0 || name.length === 0){
            Alert.alert('Atenção', 'Por favor preencha todos os campos', [
                { text: 'Entendi', onPress: () => {}}
            ])
        }else{
            try {
                await api.post('/alunos', { name, classe })
                await AsyncStorage.setItem('aluno', name)
                await AsyncStorage.setItem('turma', classe)
                navigation.navigate('Lista de Exercícios')
            } catch (error) {
                return error
            }    
        }
    }
    if(isInternet){
        return (
            <View style={styles.containerRegister}>
                <View style={styles.containerForm}>
                    

                    <View style={styles.form}>
                    <Text style={styles.title}>Bem Vindo(a)!</Text>
                        <Text style={styles.labelInput}>Nome *</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Nome completo"
                            style={styles.input}
                        />

                        <Text style={styles.labelInput}>Turma *</Text>
                        <Picker
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

                        <TouchableOpacity style={styles.Button} onPress={handleRegisterAluno}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }else{
        return <AlertInternet />
    }
}