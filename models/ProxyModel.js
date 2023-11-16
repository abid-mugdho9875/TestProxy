const axios = require('axios');

class ProxyModel {
  static async fetchData(params) {
    const {url,header1, header2, ...param} = params
    console.log(param)
    const options = {
      method: 'GET',
      url:url,
      param,
      // params: {
        
      //   function: param.function,
      //   interval:param.interval,
      //   symbol:param.symbol,
      //   referenceCurrencyUuid:param.referenceCurrencyUuid,
      //   timePeriod:param.timePeriod,
      //   tier:param.tier,
      //   orderBy:param.orderBy,
      //   orderDirection:param.orderDirection,
      //   limit:param.limit,
      //   offset:param.offset,
      //   datatype: param.datatype,
      //   outputsize: param.outputsize,
      //   from_symbol:param.from_symbol,
      //   to_symbol:param.to_symbol,
      //   market:param.market,
      //   time_period:param.timePeriod,
      //   series_type:param.series_type,
      //   format:param.format,
      //   from:param.from,
      //   to:param.to,
      //   amount:param.amount,
      //   tabname:param.tabname,
      //   fromCurrency:param.fromCurrency,
      //   to
      // },
      headers: {
        'X-RapidAPI-Key': params.header1,
        'X-RapidAPI-Host': params.header2,
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
