//AXIOS CALLS TO BACKEND GO HERE

import axios from 'axios'

export default (function(){
  return{

    get_all: function(){
      return axios.get('ROUTE GOES HERE')
    }
  };
})();
