import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CloudinaryImage = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius:70
  },
});

export default CloudinaryImage;
