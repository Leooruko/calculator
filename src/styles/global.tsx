import {colors} from './colors';
import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  blueButton: {
    backgroundColor: colors.blue,
  },
  grayButton: {
    backgroundColor: colors.btnGray,
  },
  button: {
    backgroundColor: colors.btnDark,
    borderRadius: '25%',
    alignItems: 'center',
    margin: 2,
    height: '50%',
    justifyContent: 'center',
    aspectRatio: 1,
    flex: 1,
    padding: 0,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {width: 20, height: 2},
  },
  buttonText: {
    color: colors.light,
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    padding: 10,
  },
  container: {
    justifyContent: 'flex-end',
    width: '100%',
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  switch: {
    width: 50,
    alignSelf: 'center',
    // transform: scale([{scaleY: 1.5}]),
  },
  icons: {
    position: 'absolute',
    top: '50%',
    transform: [{translateY: -10}],
    zIndex: 1,
  },
  display: {
    height: 'auto',
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 25,
    flexGrow: 1,
    flex: 1,
    flexShrink: 1,
  },
  secondNumber: {
    fontSize: 35,
    alignSelf: 'flex-end',
    color: colors.gray,
  },
  firstNumber: {
    fontSize: 70,
    color: colors.gray,
  },
  whiteText: {
    color: colors.light,
  },
  result: {
    fontSize: 100,
    color: colors.result,
  },
});
