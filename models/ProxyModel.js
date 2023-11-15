const axios = require('axios');

class ProxyModel {
  static async fetchData(params) {
    const {url, interval, symbol, function:functionName,...param} = params
    console.log(param)
    const options = {
      method: 'GET',
      url:url,
      params: {
        
        function: params.function,
        interval,
        symbol
        
        // datatype: params.datatype,
        // output_size: params.output_size,
      },
      headers: {
        'X-RapidAPI-Key': '03f8490efcmsh81fdb3742186abep123901jsn758ea15cb04a',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProxyModel;
