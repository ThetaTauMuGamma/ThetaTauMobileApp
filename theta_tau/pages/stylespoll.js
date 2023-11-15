// stylespoll.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    transition: 'all 0.5s',
  },
  loginContainer: {
    flex: 1,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: -16,
    fontSize: 48,
  },
  title: {
    textAlign: 'center',
    padding: 16,
  },
  themeToggleIcon: {
    fontSize: 32
  },
  themeToggle: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    width: 300,
    margin: 'auto',
    boxShadow: '0px 0px 12px #333',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  codeBox: {
    backgroundColor: '#ffffff', // White background for light mode
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  codeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000', // Black text for light mode
  },
  button: {
    backgroundColor: '#8e05c2',
    borderWidth: 1,
    borderColor: '#8e05c2',
    margin: 16,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  darkModeToggle: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  darkModeText: {
    color: '#fff',
  }
});

export default styles;
