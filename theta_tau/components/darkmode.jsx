// DarkMode.js

import { Appearance, StatusBar } from 'react-native';

class DarkMode {
  constructor() {
    this.isDarkMode = Appearance.getColorScheme() === 'dark';
    this.updateStatusBar();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateStatusBar();
  }

  updateStatusBar() {
    StatusBar.setBarStyle(this.isDarkMode ? 'light-content' : 'dark-content');
  }

  isDarkModeEnabled() {
    return this.isDarkMode;
  }
}

export default new DarkMode();
