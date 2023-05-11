import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardMenu, CardView } from './components/cards';
import { Avatar } from '@rneui/base';
import {HomeNavBar} from "./components/navbar/index"
import Home from './components/dataRecibe';
import { useState } from 'react';







export default function App() {
  const [mostrarDetalles, setMostrarDetalles] = useState(false)
 
  return (
    <View style={styles.backgroundApp}>
      <StatusBar style="auto" />
      <View style={styles.textColor}> 
   <HomeNavBar/>
        
      </View>

      <View style={styles.container}>
      <Home/>

      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  containerNav:{
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  textColor:{
    color: 'white',
    fontWeight: 'bold',flexDirection:"row",
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },iconSearch:{
    marginRight:15,marginTop:15
  },
  backgroundApp:{
    backgroundColor: '#1C1C1E',
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', flexDirection:"row"
  },
});
