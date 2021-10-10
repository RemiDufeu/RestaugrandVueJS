import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#CD9A6B',
            primaryDark : '#543E2A',
            secondary: '#254D98',
            error: '#E12828',
            success : '#025224',
            dark : '#292828'
          },
        },
      },
});
