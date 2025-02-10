import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DisplayScreen from '../components/screen';
import Button from '../components/button';
import {Styles} from '../styles/global';
export default function MainPage() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState<number | null>(null);
  // const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState(0);
  const handlePress = (title: string) => {
    setResult(0);
    switch (title) {
      case 'c':
        setFirstNumber('0');
        setSecondNumber(null);
        break;
      case '=':
        if (secondNumber) {
          setResult(secondNumber);
        } else if (firstNumber !== '0') {
          setResult(Number(firstNumber));
        }
        setSecondNumber(null);
        setFirstNumber('');
        break;
      case 'DEL':
        if (firstNumber.length === 1) {
          setFirstNumber('0');
        } else {
          setFirstNumber(firstNumber.slice(0, -1));
        }
        break;
      default:
        if (title in ['.', '+', '-', '×', '÷'] && firstNumber === '0') {
          break;
        }
        if (firstNumber === '0') {
          setFirstNumber(title);
        } else {
          setFirstNumber(firstNumber + title);
        }
        try {
          setSecondNumber(Number(firstNumber));
        } catch (e) {
          console.log(e);
        }
        break;
    }
  };
  return (
    // screen
    <View style={{flex: 1, height: '100%'}}>
      <DisplayScreen
        first_number={`${firstNumber}`}
        second_number={`${secondNumber}`}
        result={result}
      />
      {/* buttons */}
      <View style={Styles.container}>
        <View style={Styles.buttons}>
          <Button title="C" onPress={() => handlePress('c')} isGray />
          <Button title="∕" onPress={() => handlePress('+/-')} isGray />
          <Button title="%" onPress={() => handlePress('%')} isGray />
          <Button title="÷" onPress={() => handlePress('c')} isBlue />
        </View>
        <View style={Styles.buttons}>
          <Button title="7" onPress={() => handlePress('7')} />
          <Button title="8" onPress={() => handlePress('8')} />
          <Button title="9" onPress={() => handlePress('9')} />
          <Button title="×" onPress={() => handlePress('×')} isBlue />
        </View>
        <View style={Styles.buttons}>
          <Button title="4" onPress={() => handlePress('4')} />
          <Button title="5" onPress={() => handlePress('5')} />
          <Button title="6" onPress={() => handlePress('6')} />
          <Button title="-" onPress={() => handlePress('-')} isBlue />
        </View>
        <View style={Styles.buttons}>
          <Button title="1" onPress={() => handlePress('1')} />
          <Button title="2" onPress={() => handlePress('2')} />
          <Button title="3" onPress={() => handlePress('3')} />
          <Button title="+" onPress={() => handlePress('+')} isBlue />
        </View>
        <View style={Styles.buttons}>
          <Button title="." onPress={() => handlePress('.')} />
          <Button title="0" onPress={() => handlePress('0')} />
          <Button title="⇐" onPress={() => handlePress('DEL')} />
          <Button title="=" onPress={() => handlePress('=')} isBlue />
        </View>
      </View>
    </View>
  );
}
