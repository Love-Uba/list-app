import React , { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, StatusBar, TouchableOpacity, Button } from 'react-native'

import colors from './config/colors';

export default function IntroScreen() {

    const [name, setName] = useState('');
    const [droids, setDroids] = useState(["Love"])


    const txtHandler = (enteredName) => {
        setName(enteredName);
      };

    const nameShow = () => {
        console.log(name)
        setDroids([...droids,name])

    }


    return (
        <View style = {introStyle.container}>

                <Text style={introStyle.texts}>Hey Droids!</Text>

                { <FlatList
                    data={droids}
                    renderItem={({ item }) => {
                        return(
                            <TouchableOpacity style = {introStyle.items}>
                                <Text style={introStyle.texts}>{item}</Text>
                            </TouchableOpacity>
                        );
                    }
                }
                keyExtractor = {(_, index) => `${index}`}
                /> }


            <TextInput 
                placeholder="Enter your fullname" 
                style={introStyle.input}
                value={name}
                onChangeText={txtHandler}
                />

            <Button
                title="Press me"
                color="dodgerblue"
                onPress={nameShow}
            />
            <StatusBar style="auto"/>

        </View>
    )

}


const introStyle = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%",
        backgroundColor: "#fff",
    },
    items:{
        width: "100%",
        borderRadius: 10,
        backgroundColor: "tomato",
        marginVertical: 10,
        padding: 5,
    },
    texts: {
        fontSize:50,
        textTransform: "capitalize",
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

