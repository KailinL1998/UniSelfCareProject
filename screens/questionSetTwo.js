import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput}  from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {Formik} from 'formik';
import {Picker} from 'react-native';
import * as yup from 'yup';

const answerSchema=yup.object({
  color:yup.string().required(),
  meal:yup.string().required(),
  year:yup.string().required(),
})

export default function questionSetTwo({navigation}){

  const pressHandler=({values})=>{
    navigation.navigate('Summary',values);
  }

  const [color, setColor] = useState('');
  const [meal, setMeal] = useState('');
  const [year, setYear] = useState('');

  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          name:navigation.getParam('name'),
          month:navigation.getParam('month'),
          day:navigation.getParam('day'),
          food:navigation.getParam('food'),
          color:'',
          meal:'',
          year:''
        }}
        validationSchema={answerSchema}
        onSubmit={(values,actions)=>{
          actions.resetForm();
          pressHandler({values});
        }}
      >
        {(props)=>(
          <View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Text style={globalStyles.titleText}>What is your favorite color?</Text>
              <Picker
                selectedValue={color}
                style={{height: 40, width: 120}}
                onValueChange={(itemValue, itemIndex)=>{props.setFieldValue('color',itemValue);setColor(itemValue)}}
                value={props.values.color}
              >
                <Picker.Item label="Select:" value="" />
                <Picker.Item label="Red" value="Red" />
                <Picker.Item label="Orange" value="Orange" />
                <Picker.Item label="Yellow" value="Yellow" />
                <Picker.Item label="Green" value="Green" />
                <Picker.Item label="Blue" value="Blue" />
                <Picker.Item label="Purple" value="Purple" />
              </Picker>
              <Text style={globalStyles.errorText}>{props.touched.color && props.errors.color}</Text>
            </View>

            <Text style={globalStyles.titleText}>Which meal of the day is your favorite?</Text>
            <Picker
              selectedValue={meal}
              style={{height: 30, width: 150}}
              onValueChange={(itemValue, itemIndex)=>{props.setFieldValue('meal',itemValue);setMeal(itemValue)}}
              value={props.values.meal}
            >
              <Picker.Item label="Select:" value="" />
              <Picker.Item label="Breakfast" value="Breakfast" />
              <Picker.Item label="Brunch" value="Brunch" />
              <Picker.Item label="Lunch" value="Lunch" />
              <Picker.Item label="Dinner" value="Dinner" />
              <Picker.Item label="Late Night" value="Late Night" />
            </Picker>
            <Text style={globalStyles.errorText}>{props.touched.meal && props.errors.meal}</Text>

            <Text style={globalStyles.titleText}>Which year are you in college?</Text>
            <Picker
              selectedValue={year}
              style={{height: 30, width: 150}}
              onValueChange={(itemValue, itemIndex)=>{props.setFieldValue('year',itemValue);setYear(itemValue)}}
              value={props.values.year}
            >
              <Picker.Item label="Select:" value="" />
              <Picker.Item label="Freshman" value="Freshman" />
              <Picker.Item label="Sophomore" value="Sophomore" />
              <Picker.Item label="Junior" value="Junior" />
              <Picker.Item label="Senior" value="Senior" />
            </Picker>
            <Text style={globalStyles.errorText}>{props.touched.year && props.errors.year}</Text>

            <Button title='Next' color='#FFC0CB' onPress={()=>{props.handleSubmit()}} />
          </View>
        )}
      </Formik>
    </View>
  )
}
