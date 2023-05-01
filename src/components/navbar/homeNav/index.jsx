import { View } from "react-native"
import { Avatar } from '@rneui/themed';
import { Header } from '@rneui/themed';
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeNavBar = () => {
  return (
    <View style={styles.containerNav}>   
    <Header style={styles.headerNav}>
      <View>
          <Avatar
        size={64}
        rounded
        source={ { uri: "https://res.cloudinary.com/hdsqazxtw/image/upload/v1680302268/hqdyye6dn8jcvowrzimd.jpg" }}/>
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