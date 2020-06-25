import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput}  from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {Formik} from 'formik';
import {Picker} from 'react-native';
import * as yup from 'yup';

const answerSchema=yup.object({
  name:yup.string().required(),
  month:yup.string().required(),
  day:yup.string().required(),
  food:yup.string().required(),
})

export default function questionSetOne({navigation}){

  const pressHandler=({values})=>{
    navigation.navigate('QuestionSetTwo',values);
  }

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{name:'',month:'',day:'',food:''}}
        validationSchema={answerSchema}
        onSubmit={(values,actions)=>{
          actions.resetForm();
          pressHandler({values});
        }}
      >
        {(props)=>(
          <View>
            <Text style={globalStyles.titleText}>What is your name?</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

            <Text style={globalStyles.titleText}>What is your birthday?</Text>
            <Picker
              selectedValue={month}
              style={{height: 50, width: 130}}
              onValueChange={(itemValue, itemIndex)=>{props.setFieldValue('month',itemValue);setMonth(itemValue)}}
              value={props.values.month}
            >
              <Picker.Item label="Jan" value="January" />
              <Picker.Item label="Feb" value="February" />
              <Picker.Item label="Mar" value="March" />
              <Picker.Item label="Apr" value="April" />
              <Picker.Item label="May" value="May" />
              <Picker.Item label="Jun" value="June" />
              <Picker.Item label="Jul" value="July" />
              <Picker.Item label="Aug" value="August" />
              <Picker.Item label="Sep" value="September" />
              <Picker.Item label="Oct" value="October" />
              <Picker.Item label="Nov" value="November" />
              <Picker.Item label="Dec" value="December" />
            </Picker>
            <Text style={globalStyles.errorText}>{props.touched.month && props.errors.month}</Text>

            <Picker
              selectedValue={day}
              style={{height: 50, width: 130}}
              onValueChange={(itemValue, itemIndex)=>{props.setFieldValue('day',itemValue);setDay(itemValue)}}
              value={props.values.day}
            >
              <Picker.Item label="1" value="1" /><Picker.Item label="2" value="2" /><Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" /><Picker.Item label="5" value="5" /><Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" /><Picker.Item label="8" value="8" /><Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" /><Picker.Item label="11" value="11" /><Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" /><Picker.Item label="14" value="14" /><Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" /><Picker.Item label="17" value="17" /><Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" /><Picker.Item label="20" value="20" /><Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" /><Picker.Item label="23" value="23" /><Picker.Item label="24" value="24" />
              <Picker.Item label="25" value="25" /><Picker.Item label="26" value="26" /><Picker.Item label="27" value="27" />
              <Picker.Item label="28" value="28" /><Picker.Item label="29" value="29" /><Picker.Item label="30" value="30" />
              <Picker.Item label="31" value="31" />
            </Picker>
            <Text style={globalStyles.errorText}>{props.touched.day && props.errors.day}</Text>

            <Text style={globalStyles.titleText}>What is your favorite food?</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Food Name'
              onChangeText={props.handleChange('food')}
              value={props.values.food}
            />
            <Text style={globalStyles.errorText}>{props.touched.food && props.errors.food}</Text>

            <Button title='Next' color='#90EE90' onPress={()=>{props.handleSubmit()}} />
          </View>
        )}
      </Formik>
    </View>
  )
}
