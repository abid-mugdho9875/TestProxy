const axios = require('axios');

class ProxyModel {
  static async fetchData(params) {
    const {url,...param} = params
    console.log(param)
    const options = {
      method: 'GET',
      url:url,
      params: {
        
        function: param.function,
        interval:param.interval,
        symbol:param.symbol,
        referenceCurrencyUuid:param.referenceCurrencyUuid,
        timePeriod:param.timePeriod,
        tier:param.tier,
        orderBy:param.orderBy,
        orderDirection:param.orderDirection,
        limit:param.limit,
        offset:param.offset,
        datatype: param.datatype,
        outputsize: param.outputsize,
        from_symbol:param.from_symbol,
        to_symbol:param.to_symbol,
        market:param.market,
        time_period:param.timePeriod,
        series_type:param.series_type,
        format:param.format,
        from:param.from,
        to:param.to,
        amount:param.amount
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
