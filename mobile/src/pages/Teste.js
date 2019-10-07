import React, { useState, useEffect } from 'react';
import socketio from  'socket.io-client';
import {Alert, ScrollView, SafeAreaView, StyleSheet, Image, AsyncStorage} from 'react-native';

import TesteSpotList from '../components/TesteSpotList';

import logo from '../assets/logo.png';

export default function Teste(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {                
        AsyncStorage.getItem('user').then(user_id=> {
            
            const socket = socketio('http://192.168.0.105:3333', {
                query: { user_id },                
            })            
            socket.on('booking_response', booking => {
                Alert.alert(
                    'AVISO',
                    `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA':'REJEITADA'}`,
                    [              
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ]
                  );                
            })
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Image style={styles.logo} source={logo} />
            
            <ScrollView>
            {techs.map(tech => <TesteSpotList key={tech} tech={tech}/>)}
            </ScrollView>
            <>
            </>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,

    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,
    },  
});