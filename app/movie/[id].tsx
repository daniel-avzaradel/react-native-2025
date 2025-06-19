import React from 'react';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Text, View } from 'react-native';

const MovieDetails = () => {

    const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie details: {id}</Text>
    </View>
  )
}

export default MovieDetails