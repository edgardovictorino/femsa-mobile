import {StyleSheet} from 'react-native';

const PADDING = 5;

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 120,
    borderWidth: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: PADDING,
    backgroundColor: 'lightblue',
  },
  outContainer: {
    width: 20,
    height: 60,
    backgroundColor: 'darkblue',
    position: 'absolute',
    right: -30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    top: 30,
  },
  charge: {
    position: 'absolute',
    backgroundColor: 'lime',
    left: PADDING,
    top: PADDING,
    bottom: PADDING,
  },
  warningCharge: {
    backgroundColor: 'orange',
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
