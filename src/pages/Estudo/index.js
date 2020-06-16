import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { AsyncStorage } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

import AlertInternet from '../../components/AlertInternet'

export default function YoutubeView(){
    const [content, setContent] = useState('')
    const [isInternet, setIsInternet] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('content').then(response => {
            setContent(response)
        })
    },[])

    useEffect(() => {
        NetInfo.fetch().then(status => {
            setIsInternet(status.isInternetReachable)
        })
    }, [isInternet])

    if(isInternet){
        return <WebView style={{ flex: 1 }} source={{ uri: `${content}` }} />
    }else{
        return <AlertInternet />
    }
}