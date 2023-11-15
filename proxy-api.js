const { function: functionName, ...otherParams } = {
  interval: '5min',
  function: 'TIME_SERIES_INTRADAY',
  symbol: 'MSFT',
  datatype: 'json',
  output_size: 'compact',
  url: 'https://alpha-vantage.p.rapidapi.com/query'
};

console.log(`Function name: ${functionName}`);
console.log('Other parameters:', otherParams);
