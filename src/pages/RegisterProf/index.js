import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'

import styles from './styles'
import AlertInternet from '../../components/AlertInternet'

import api from '../../services/api'

export default function RegisterAluno(){
    const [name, setName] = useState('')
    const [accessCode, setAccessCode] = useState('')
    const [isInternet, setIsInternet] = useState(false)
    
    const navigation = useNavigation()

    const access = 'cabral2020professores'

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setIsInternet(state.isInternetReachable)
        })
    }, [])
        
    async function handdleSubmit(){
        if(name.length === 0 || accessCode.length === 0){
            Alert.alert('Atenção', 'Por favor preencha todos os campos.', [
                { text: 'Entendi', onPress: () => {}}
            ])
        }else{
            if(accessCode !== access){
                Alert.alert('Atenção', 'Código de acesso inválido.', [
                    { text: 'Entendi', onPress: () => {}}
                ])
            }else{
                try {
                    api.post('/registers', {name, accessCode}).then(response => {
                        const { id } = response.data
                        AsyncStorage.setItem('prof_id', id).then()
                    })
                    navigation.navigate('Painel do Professor')
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    if(isInternet){
        return (
            <View style={styles.containerRegister}>
                <View style={styles.form}>
                    <Text style={styles.title}>Bem Vindo(a)!</Text>
                    
                    <Text style={styles.labelInput}>Nome *</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />

                    <Text style={styles.labelInput}>Código de acesso *</Text>
                    <TextInput
                        value={accessCode}
                        onChangeText={setAccessCode}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.Button} onPress={handdleSubmit}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else{
        return <AlertInternet />
    }
}