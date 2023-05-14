import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SectionList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardMenu, CardView } from './components/cards';
import { Avatar } from '@rneui/base';
import { HomeNavBar } from "./components/navbar/index"
import Home from './components/dataRecibe';
import { useState } from 'react';
import { styles } from './styles';
import { useFonts } from "expo-font"


export default function App() {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [loaded] = useFonts({
    'Oswald-Bold': require("../assets/fonts/Oswald-Bold.ttf"),
    'Oswald-ExtraLight': require("../assets/fonts/Oswald-ExtraLight.ttf")
  });

  const handleMostrarDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  }

  return (
    <View style={styles.backgroundApp}>
      <StatusBar style="auto" />
      <View style={styles.textColor}>
        <HomeNavBar />
      </View>
      <View>
        <Text style={styles.textHead}>Welcome</Text>
      </View>

      <View style={styles.container}>

        { mostrarDetalles ? (
          <Home />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Button title="Mostrar detalles" onPress={handleMostrarDetalles} />
          </View>
        ) }

      </View>

    </View>
  );
}
