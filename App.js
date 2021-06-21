import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);
const changeed =(enteredText)=>{
  setEnteredGoal(enteredText)
};

const addTodo = ()=>{
console.log('test your todo list input');
setCourseGoals(currentGoal => [...currentGoal, {key: Math.random().toString(), value: enteredGoal} ]);
}
  return (
  
    <View style={styles.screen}>

    <View style={styles.partt} >

    <TextInput placeholder="You Can Put SOmethings" 
    style={styles.party} 
    onChangeText = {changeed} 
    value={enteredGoal}/>

    <Button title="ADD" onPress={addTodo} />

    </View>

    <FlatList
    data={courseGoals}
    renderItem={
      itemData =>(
        <View style={styles.listItem}> 
        <Text > {itemData.item.value} </Text> 
        </View> 
      )}
    />
    <View> 
    
    </View>

    </View>

 
  );
}


const styles = StyleSheet.create({
screen:{
  padding:50
},
partt:{flexDirection:"row",justifyContent:"space-evenly"},
party:{borderColor:'black',borderWidth:1,padding:10},
listItem:{padding:10, backgroundColor:'#e6e6fa', borderColor:'#add8e6',borderWidth:1,marginTop:15, marginVertical:5}
})