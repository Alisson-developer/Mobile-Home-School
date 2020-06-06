import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import RegisterAluno from './pages/RegisterAluno'
import Responses from './pages/Responses'
import Estudo from './pages/Estudo'

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#b00fff'}}}>
                <AppStack.Screen name="Alunos" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={RegisterAluno} />
                <AppStack.Screen name="Lista de Exercícios" options={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerLeft: null,
                }} component={Responses} />
                <AppStack.Screen name="Estudo" options={{headerTitleAlign: 'center', headerTintColor: '#fff'}} component={Estudo} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}