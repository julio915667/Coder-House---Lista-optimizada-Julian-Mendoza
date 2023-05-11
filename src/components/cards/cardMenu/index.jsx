import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Card, Button, Image } from '@rneui/themed';
import { useState } from 'react';
import { CardView } from '../cardView';

const CardMenu = ({ name, description, imageUrl }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  if(mostrarDetalles){
    return CardView({name, description})
  }
  return (
    <View>
      <Card>
        <Card.Title>{name}</Card.Title>
        <Card.Divider />
        <Image source={{ uri: imageUrl }} style={{ width: '20%', height: '20%' }} />
        <Text style={{ marginBottom: 10 }}>{description}</Text>
        
        <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Ver Ahora"
          onPress={() => setMostrarDetalles(true)}
        />
      </Card>
    </View>
  );
};

export default CardMenu;
