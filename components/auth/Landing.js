import React from 'react'
import {Text, View, Button} from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style = {{flex : 1, justifyContent:"center"}}>
            <Button
                title='Register'
                onPresss={() =>navigation.navigate("Register") }/>
            <Button
                title='Login'
                onPresss={() =>navigation.navigate("Login") }/>
            
        </View>
    )
}
