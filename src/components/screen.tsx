import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../styles/global';
import {ThemeContext} from '../context/themeContext';
import {useContext} from 'react';

export default function DisplayScreen({
  first_number,
  second_number,
  result,
}: {
  first_number: string;
  second_number?: string;
  result: number;
}) {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[Styles.display]}>
      {result === 0 ? (
        <View>
          <Text
            style={[
              Styles.secondNumber,
              theme !== 'light' && Styles.whiteText,
            ]}>
            {second_number !== 'null' ? second_number : ''}
          </Text>
          <Text
            style={[Styles.firstNumber, theme !== 'light' && Styles.whiteText]}>
            {first_number}
          </Text>
        </View>
      ) : (
        <Text style={Styles.result}>{result}</Text>
      )}
    </View>
  );
}
