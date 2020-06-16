import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Welcome from './pages/Welcome'

// Alunos ===========================================
import RegisterAluno from './pages/RegisterAluno'
import Responses from './pages/Responses'
import Estudo from './pages/Estudo'
// ==================================================

// Professores ==========================================
import Dashboard from './pages/Dashboard'
import ListAlunos from './pages/ListAlunos'
import RegisterProf from './pages/RegisterProf'
import ResponsesAlunos from './pages/ResponsesAlunos'
// ======================================================

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#b00fff'}}}>
                <AppStack.Screen name="Bem vindos!" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={Welcome} />

                <AppStack.Screen name="Alunos" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={RegisterAluno} />
                <AppStack.Screen name="Lista de Exercícios" options={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerLeft: null,
                }} component={Responses} />
                <AppStack.Screen name="Estudo" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={Estudo} />
                
                <AppStack.Screen name="Professores" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={RegisterProf} />
                <AppStack.Screen name="Painel do Professor" options={{
                    headerTitleAlign: 'center', 
                    headerTintColor: '#fff',
                    headerLeft: null,
                    }} component={Dashboard} />
                <AppStack.Screen name="Alunos Cadastrados" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={ListAlunos} />
                <AppStack.Screen name="Respostas" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={ResponsesAlunos} />

            </AppStack.Navigator>
        </NavigationContainer>
    )
}