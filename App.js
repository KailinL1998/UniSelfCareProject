import React, {useState} from 'react';
import * as Font from 'expo-font';
import QuestionSetOne from './screens/questionSetOne';
import {AppLoading} from 'expo';
import Navigator from './routes/appStack';

const getFonts=()=>Font.loadAsync({
  'BalsamiqSans-regular':require('./assets/fonts/BalsamiqSans-Regular.ttf'),
  'BalsamiqSans-bold':require('./assets/fonts/BalsamiqSans-Bold.ttf'),
});

export default function App(){

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <Navigator />
    );
  } else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
    );
  }
}
