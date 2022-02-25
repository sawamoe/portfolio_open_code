import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const customTheme = {
    primary: '#FF9F00',
    secondary: '#ffc107',
    accent: '#3f51b5',
    error: '#e91e63',
    warning: '#f44336',
    info: '#2196f3',
    success: '#4caf50'
  
};

export default new Vuetify({
  theme: {
    themes: {
      light: customTheme,
      dark : customTheme
    }
  }
});
