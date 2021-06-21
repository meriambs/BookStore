import React , {useState} from 'react'
import { View , Text, Button, StyleSheet, TextInput} from 'react-native'

const Goallput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const changeed =(enteredText)=>{
        setEnteredGoal(enteredText)
      };
    return (
        <View style={sty.partt} >

        <TextInput placeholder="You Can Put SOmethings" 
        style={sty.party} 
        onChangeText = {changeed} 
        value={enteredGoal}/>
    
        <Button title="ADD" onPress={props.onAddGoal.bind( this, enteredGoal)} />
    
        </View>
    )
}
const sty = StyleSheet.create({
   
    partt:{flexDirection:"row",justifyContent:"space-evenly"},
    party:{borderColor:'black',borderWidth:1,padding:10},
    })
export default Goallput
