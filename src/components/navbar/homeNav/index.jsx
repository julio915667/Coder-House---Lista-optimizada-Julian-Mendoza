import { ActivityIndicator, View } from "react-native"
import { Avatar } from '@rneui/themed';
import { Header } from '@rneui/themed';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from "react-native-elements";
import { useFonts } from "expo-font"
const HomeNavBar = () => {

  const[loaded] = useFonts({
    "Oswald-Bold": require("../../../../assets/fonts/Oswald-Light")
  })
  if(loaded){
    return <ActivityIndicator size="large" color="red"/>
  }
  return (
    <View style={styles.containerNav}>   
    <Header style={styles.headerNav}>
      <View style={styles.ContainerName}>
         <Text style={styles.TextHead}>TaskMaster</Text>
      </View>
    
          <View style={styles.containerIcon}>
         <View style={styles.containerIcon}>
         <Icon name="bell" size={25} color="white"/>
          <Icon name="search" size={25} color="white" />
         </View>
          </View>
    </Header>
    </View>
  )
}
export default HomeNavBar