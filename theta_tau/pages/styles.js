// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#ffffff',
    color: '#000',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 14,
    transition: 'all 0.5s',
  },
  loginContainer: {
    paddingTop: 0,
    textAlign: 'center',
    margin: -16, // Adjust this value as needed
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
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialIcon: {
    fontSize: 16,
  },
  divider: {
    width: '100%',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    lineHeight: 0.1,
    margin: 16,
  },
  span: {
    padding: '0 10px',
    backgroundColor: '#fff',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: 8,
    fontWeight: '600',
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#ffffff',
    color: '#000',
  },
  remember: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  rememberText: {
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#8e05c2',
    borderWidth: 1,
    borderColor: '#8e05c2',
    color: '#fff',
    margin: 16,
    padding: 10,
    borderRadius: 10,
    fontWeight: '600'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: 14,
  },
  create: {
    fontSize: 16,
    marginTop: 16
  },
});

export default styles;
