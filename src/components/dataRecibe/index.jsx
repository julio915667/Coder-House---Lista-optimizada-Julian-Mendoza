import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { CardMenu } from '../cards';
import { styles } from './styles';
import { Input } from 'react-native-elements';
import { Icon } from '@rneui/base';
const Home = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handlePress = () => {
    const newData = { name, description };
    setData(prevData => [...prevData, newData]);
    setName('');
    setDescription('');
    setShowCard(true);
  };

  const handleDelete = (index) => {
    setData(prevData => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <View style={styles.container}>
  
<Input
      containerStyle={styles.Inputs}
      disabledInputStyle={{ background: "red" }}
      inputContainerStyle={{}}
     
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="Nombre"
      labelStyle={{color:"white"}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Escriba aqui..."
      onChangeText={setName}
      value={name}/>
      

<Input
      containerStyle={styles.Inputs}
      disabledInputStyle={{ background: "red" }}
      inputContainerStyle={{}}
      
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="Descripcion"
      labelStyle={{color:"white"}}
      labelProps={{}}
      
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Escriba aqui..."
      style={styles.Inputs}
      onChangeText={setDescription}
      value={description}
    />


      <Button title="Enviar" onPress={handlePress} />
      {data.map((item, index) => (
        <View key={index}>
          <CardMenu name={item.name} description={item.description} />
          <Button title="Borrar" onPress={() => handleDelete(index)} />
        </View>
      ))}
    </View>
  );
};

export default Home;
