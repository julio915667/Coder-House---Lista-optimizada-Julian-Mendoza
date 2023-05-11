import React from 'react'
import { Text, View } from 'react-native'

export const CardView = ({ name, description, imageUrl }) => {
  return (
  <View>
    <Text>{name}</Text>
    <Text>{description}</Text>
  </View>
  )
}

