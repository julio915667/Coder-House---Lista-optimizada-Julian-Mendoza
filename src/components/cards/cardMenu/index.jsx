import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Card, Button, Image } from '@rneui/themed';

const CardMenu = ({ name, description, imageUrl }) => {
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
          title="VIEW NOW"
        />
      </Card>
    </View>
  );
};

export default CardMenu;
