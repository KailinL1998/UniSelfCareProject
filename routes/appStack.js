import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import QuestionSetOne from '../screens/questionSetOne';
import QuestionSetTwo from '../screens/questionSetTwo';
import Summary from '../screens/summary';

const screens={
  QuestionSetOne:{
    screen:QuestionSetOne,
    navigationOptions:{
      title:'Question Set One',
      headerStyle:{backgroundColor:'#90EE90'},
    }
  },
  QuestionSetTwo:{
    screen:QuestionSetTwo,
    navigationOptions:{
      title:'Question Set Two',
      headerStyle:{backgroundColor:'#FFC0CB'},
    }
  },
  Summary:{
    screen:Summary,
    navigationOptions:{
      title:'Summary',
      headerStyle:{backgroundColor:'#87CEEB'},
    }
  }
}

const AppStack=createStackNavigator(screens);

export default createAppContainer(AppStack);
