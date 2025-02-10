import React from 'react';
import {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Styles} from '../styles/global';
import {ThemeContext} from '../context/themeContext';
import {colors} from '../styles/colors';
interface ButtopProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

export default function Button({onPress, title, isBlue, isGray}: ButtopProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Styles.button,
        theme === 'light' && [{backgroundColor: 'white'}],
        isGray && Styles.grayButton,
        isBlue && Styles.blueButton,
      ]}>
      <Text
        style={[
          Styles.buttonText,
          theme === 'light' && !isBlue && !isGray && {color: colors.gray},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
