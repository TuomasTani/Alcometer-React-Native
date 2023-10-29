import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import { styles } from './styles/Styles.js';

export default function App() {

  const [isDarkMode, setDarkMode] = useState(false);
  const Dark = () => setDarkMode(!isDarkMode);

  const [time, setTime] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState('male');
  const [alco, setAlco] = useState(0);
  
  const calculate = () => {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;

    if (gender === 'male' ) {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }

    if (result >= 0) {
      setAlco(result.toFixed(2));
    } else {
      setAlco('0');
    }
  }

  darkStyle = function (options) {
    return {
      backgroundColor: isDarkMode ? '#696969' : 'white',
    
    }
  }
  
  return (

    <View style={[styles.container, darkStyle()]}>
      <Text style={styles.header}>Alcometer</Text>
      <StatusBar style="auto" />


      <View style={styles.texts}>
        <Text style={styles.texts}>Weight</Text>
        <TextInput
        value={weight.toString()}
        style={styles.textInput}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"

        />
      </View>

      <View style={styles.texts}>
        <Text style={styles.texts}>Bottles</Text>
        <NumericInput
        value={bottles}
        onChange={(value) => setBottles(value)}
        rounded={true}
        totalWidth={160}
        totalHeight={50}
        minValue={0}
        step={1}
        rightButtonBackgroundColor='#4682b4'
        leftButtonBackgroundColor='#4682b4'
        
        />
      </View>

      <View style={styles.texts}>
        <Text style={styles.texts}>Hours</Text>
        <NumericInput
        value={time}
        onChange={(value) => setTime(value)}
        rounded={true}
        totalWidth={160}
        totalHeight={50}
        minValue={0}
        step={1}
        rightButtonBackgroundColor='#4682b4'
        leftButtonBackgroundColor='#4682b4' 
        
        />
      </View>
      <RadioButton.Group
      onValueChange={(value) => setGender(value)}
      value={gender}
      >

        <View>
          <Text style={styles.text}>Male</Text>
          <RadioButton value="male" />
        </View>

        <View>
          <Text style={styles.text}>Female</Text>
          <RadioButton value="female" />
        </View>

      </RadioButton.Group>
      
      <Text style={styles.textResult}>{alco}</Text>
      <View>
        <Button title="Calculate" onPress={calculate} />
      </View>

      <TouchableOpacity
      onPress={Dark}
      style={darkStyle()}
      >
      <Text style={styles.buttonDark}>
      Toggle Dark Mode
      </Text>
      </TouchableOpacity> 
    </View>

  );
} 