import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// import test from 'node:test';

createApp({
  data() {
    return {
      api: 'https://ishqhsi-code.vercel.app',
      formData: {
        nama: '',
        nohp: '',
      },
      jalan:
        'Jl. Kuripan No.21 A, RT.03, Kuripan, Kec. Banjarmasin Tim., Kota Banjarmasin, Kalimantan Selatan',
      linkMap: 'https://maps.app.goo.gl/3YwVxzGNhZDoG2Hy8',

      datadaftar: [],
    };
  },

  mounted() {
    axios.get(this.api + '/test').then((response) => {
      console.log(response.data);
    });
  },

  methods: {
    
    test(){
      alert('tes');
      try {
        axios.get(this.api + '/test-input').then((response) => {
          console.log(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
}).mount('#app');
