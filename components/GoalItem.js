import React from 'react'
import { View , Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
        <View style={styl.listItem}> 
        <Text > {props.title} </Text> 
        </View> 
    )
}

const styl = StyleSheet.create( {
    listItem:{padding:10, backgroundColor:'#e6e6fa', borderColor:'#add8e6',borderWidth:1,marginTop:15, marginVertical:5}

})

export default GoalItem
