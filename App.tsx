import React from 'react';
import {View, Switch, Text} from 'react-native';
import {ThemeContext} from './src/context/themeContext';
import MainPage from './src/screens/main';
import {colors} from './src/styles/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './src/styles/global';
function App(): React.JSX.Element {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{theme}}>
      <View
        style={
          theme === 'light'
            ? Styles.container
            : [Styles.container, {backgroundColor: colors.dark}]
        }>
        <View>
          {/* Icon Overlay */}
          {/* <Ionicons
            name={theme === 'light' ? 'moon' : 'sunny'}
            size={20}
            color={theme === 'dark' ? '#000' : '#FFD700'}
            style={[Styles.icons, theme === 'light' ? {left: 5} : {left: 25}]}
          /> */}

          {/* Switch Button */}
          <Switch
            trackColor={{true: '#333', false: '#fff'}}
            thumbColor={theme === 'light' ? '#f4f4f4' : '#333'}
            value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={Styles.switch}
          />
        </View>
        <MainPage />
      </View>
    </ThemeContext.Provider>
  );
}

export default App;
