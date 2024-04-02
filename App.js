import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Picker } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('100');
  const [operation, setOperation] = useState('*');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);
    const number4 = parseFloat(num4);

    switch (operation) {
      case '*':
        setResult((number1 * number2 * number3 / number4 + number1).toString());
        break;
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Principle Amount"
        onChangeText={text => setNum1(text)}
        value={num1}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Interest for Annum"
        onChangeText={text => setNum2(text)}
        value={num2}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Time"
        onChangeText={text => setNum3(text)}
        value={num3}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculateResult} />
      <Text style={styles.result}> {result} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    textAlign: 'center',
    fontSize: 24,
    width: '50%',
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  picker: {
    textAlign: 'center',
    fontSize: 24,
    width: '50%',
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
  },
  result: {
    textAlign: 'center',
    fontsize: 24,
    marginTop: 10,
    padding: 20,
    fontWeight: 'bold',
  },
});

export default Calculator;