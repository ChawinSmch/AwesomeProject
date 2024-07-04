import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './screens/Welcome'; 
import Ex01 from './screens/week2/Ex01';
import Ex02 from './screens/week2/Ex02';
import Ex03 from './screens/week2/Ex03';
import Ex04 from './screens/week2/Ex04';
import Ex05 from './screens/week2/Ex05';
import Ex06 from './screens/week2/Ex06';
import Ex07 from './screens/week2/Ex07';
import Ex08 from './screens/week2/Ex08';
import Ex09 from './screens/week2/Ex09';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Test from './screens/week3/test';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';
import Signup from './components/week3/Signup';
import Card from './components/week3/Card';
import Hotel from './components/week3/Hotel';
import MyIcon from './components/week3/Myicon';

export default function App() {
  return (
    // <Ex01/>
    // <Ex02/>
    // <Ex03/>
    // <Ex04/>
    // <Ex05/>
    // <Ex06/>
    // <Ex07/>
    // <Ex08/>
     // <Ex09/>
    // <Ex10/>
    //  <Ex11/>
    //  <Ex12/>
    // <Test/>
    // <View style={{alignItems: 'center', top: 50}}>
    //     <Greeting name='Boooo' />
    //     <Greeting name='Karekaree' />
    //     <Greeting name='Queyson' />
    //   </View>
     <Travel/>
    //  <Signup/>
    //  <Card/>
    //  <Hotel/>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
