  // styles.js
  import { StyleSheet } from 'react-native';

  const styles = (theme) => StyleSheet.create({
    app: {
      backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
      color: theme === 'dark' ? '#ffffff' : '#000',
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
      margin: -16,
      fontSize: 48,
      alignItems: 'center',
      justifyContent: 'center',
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
      backgroundColor: 'transparent', // Set background color to transparent for both light and dark themes
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
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
      color: theme === 'dark' ? '#ffffff' : '#000000',
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
      backgroundColor: theme === 'dark' ? '#3f0000' : '#990000', // Set button color based on the theme
      borderWidth: 1,
      borderColor: '#FFC000',
      margin: 16,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
    },
    bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      fontSize: 14,
    },
    create: {
      fontSize: 16,
      marginTop: 16,
      color: theme === 'dark' ? '#ffffff' : '#000000',
    },
    logo: {
      width: 80, // Set the width of the logo as per your requirement
      height: 100, // Set the height of the logo as per your requirement
      marginTop: 16, // Adjust the marginTop to add space between the title and logo based on your requirement
    }
    }
  );

  export default styles;