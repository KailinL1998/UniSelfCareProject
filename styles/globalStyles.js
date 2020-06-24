import {StyleSheet} from 'react-native';

export const globalStyles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  titleText:{
    color:'black',
    fontSize:17,
    fontFamily:'BalsamiqSans-regular',
    fontWeight:'normal',
    marginTop:10,
    marginLeft:0,
    marginBottom:10,
    textAlign: 'left'
  },
  questionText:{
    marginVertical:8,
    lineHeight:20,
  },
  input:{

  },
  errorText:{
    color:'crimson',
    fontWeight:'bold',
    marginBottom:5,
    marginTop:5,
    textAlign:'left'
  }
});
