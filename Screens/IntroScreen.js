import React , { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, StatusBar, Button } from 'react-native'

import colors from './config/colors';

export default function IntroScreen() {

    const [name, setName] = useState('');
    const [droids, setDroids] = useState(["baby"])


    const txtHandler = (enteredName) => {
        setName(enteredName);
      };

    const nameShow = () => {
        console.log(name)
       // droids.push(name)
        setDroids([...droids,name])

    }


    return (
        <View style = {introStyle.container}>
                { <FlatList
                    data={droids}
                    renderItem={({ item }) => {
                        return(
                            <View style = {introStyle.items}>
                                <Text style={introStyle.texts}>{item}</Text>
                            </View>
                        );
                    }
                }
                keyExtractor = {(_, index) => `${index}`}
                /> }

            <Text style={introStyle.texts}>Hey Droids!</Text>
            <Text style={introStyle.texts}>I am just testing...</Text>


            <TextInput 
                placeholder="Enter your fullname" 
                style={introStyle.input}
                value={name}
                onChangeText={txtHandler}
                />

            <Button
                title="Press me"
                color="#f194ff"
                onPress={nameShow}
            />

            {/* <View style={introStyle.result}>
                <Text style={introStyle.texts}>
                {name !== ''
                    ? `Hello ${name}`
                    : 'Please enter your name then hit the button'}
                </Text>
            </View> */}



            <StatusBar style="auto"/>

        </View>
    )

}


const introStyle = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        backgroundColor: "dodgerblue",
    },
    items:{
        width: "100%",
        backgroundColor: colors.secondary,
    },
    texts: {
        fontSize:50,
        fontStyle:"italic",
    },
    input: {
        padding: 10,
        marginVertical: 20,
        width: "100%",
        fontSize: 18,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
    result: {
        marginTop: 30,
        paddingHorizontal: 30,
        display: 'flex',
      }
})

