import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, Image, AsyncStorage} from 'react-native';

import logo from '../assets/logo.png';
import TesteSpotList from '../components/TesteSpotList';

export default function Teste(){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Image style={styles.logo} source={logo} />
            
            {techs.map(tech => <TesteSpotList key={tech} tech={tech}/>)}
            
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