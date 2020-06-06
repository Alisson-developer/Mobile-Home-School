import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { AsyncStorage } from 'react-native'


export default function YoutubeView(){
    const [content, setContent] = useState('')
    useEffect(() => {
        AsyncStorage.getItem('content').then(response => {
            setContent(response)
        })
    },[])
    return <WebView style={{ flex: 1 }} source={{ uri: `${content}` }} />
}