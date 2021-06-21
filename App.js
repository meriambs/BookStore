import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

import Goallput from './components/Goallput';

export default function App() {

const [courseGoals, setCourseGoals] = useState([]);

const addTodo = goaltitle=>{
  console.log('test your todo list input');
  setCourseGoals(currentGoal => [...currentGoal, {key: Math.random().toString(), value: goaltitle} ]);
  }

  return (
  
    <View style={styles.screen}>

    <Goallput onAddGoal={addTodo} />

    <FlatList
    data={courseGoals}
    renderItem={
      itemData =>(
        <GoalItem title={itemData.item.value} />
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

})