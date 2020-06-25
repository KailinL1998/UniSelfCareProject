import React from 'react';
import {StyleSheet, View, Text, Button, FlatList}  from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function summary({navigation}){

  const pressHandler=()=>{
    navigation.navigate('QuestionSetOne');
  }

  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Name: {navigation.getParam('name')}</Text>
      <Text style={globalStyles.titleText}>Birthday: {navigation.getParam('month')} {navigation.getParam('day')}</Text>
      <Text style={globalStyles.titleText}>Favorite Food: {navigation.getParam('food')}</Text>
      <Text style={globalStyles.titleText}>Favorite Color: {navigation.getParam('color')}</Text>
      <Text style={globalStyles.titleText}>Favorite Meal of Day: {navigation.getParam('meal')}</Text>
      <Text style={globalStyles.titleText}>Year in College: {navigation.getParam('year')}</Text>
      <Button title='Start Over Again' color='#87CEEB' onPress={pressHandler} />
    </View>
  )
}
