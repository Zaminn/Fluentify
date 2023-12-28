import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const NumberInput = () => {
  const [value, setValue] = useState('0');

  const handleIncrement = () => {
    const newValue = String(parseInt(value, 10) + 1);
    setValue(newValue);
  };

  const handleDecrement = () => {
    const newValue = String(Math.max(parseInt(value, 10) - 1, 0));
    setValue(newValue);
  };

  const handleChangeText = (input) => {
    // Validate input to ensure it's a valid number (you can add more validation as needed)
    const newValue = input.replace(/[^0-9]/g, ''); // Allow only numeric characters
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number:</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChangeText}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection:"row",
    marginLeft:'20%'
  },
  label: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    fontSize: 24,
    paddingHorizontal: 10,
    color: 'blue',
  },
  input: {
    fontSize: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    minWidth: 50,
    textAlign: 'center',
  },
});

export default NumberInput;
