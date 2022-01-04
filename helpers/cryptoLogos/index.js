const logos = {
  ADAUSDT: require('../cryptoLogos/ada.png'),
  // BCCUSDT: require('../../assets/logos/bcc@2x.png'),
  // BNBUSDT: require('../../assets/logos/bnb@2x.png'),
  // BTCUSDT: require('../../assets/logos/btc@2x.png'),
  // EOSUSDT: require('../../assets/logos/eos@2x.png'),
  // ETCUSDT: require('../../assets/logos/etc@2x.png'),
  // ETHUSDT: require('../../assets/logos/eth@2x.png'),
  // ICXUSDT: require('../../assets/logos/icx@2x.png'),
  // IOTAUSDT: require('../../assets/logos/ltc@2x.png'),
  // LTCUSDT: require('../../assets/logos/miota@2x.png'),
  // NEOUSDT: require('../../assets/logos/neo@2x.png'),
  // ONTUSDT: require('../../assets/logos/ont@2x.png'),
  // QTUMUSDT: require('../../assets/logos/qtum@2x.png'),
  // TRXUSDT: require('../../assets/logos/trx@2x.png'),
  // TUSDUSDT: require('../../assets/logos/tusd@2x.png'),
  // VENUSDT: require('../../assets/logos/vet@2x.png'),
  // XLMUSDT: require('../../assets/logos/xlm@2x.png'),
  // XRPUSDT: require('../../assets/logos/xrp@2x.png')
}

export const cryptoLogos = symbol => logos[symbol] || false
