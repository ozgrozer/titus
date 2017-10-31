var hiddenMessage = function (opts) {
  var result

  if (opts.text.length < 2) {
    result = 'Minimum 2 characters required.\nBecause secret message will be hidden in the letters.'
  } else {
    var characters = {
      'a': '&#8192;',
      'b': '&#8193;',
      'c': '&#8194;',
      'd': '&#8195;',
      'e': '&#8196;',
      'f': '&#8197;',
      'g': '&#8198;',
      'h': '&#8199;',
      'i': '&#8200;',
      'j': '&#8201;',
      'k': '&#8203;',
      'l': '&#8204;',
      'm': '&#8205;',
      'n': '&#8206;',
      'o': '&#8207;',
      'p': '&#8232;',
      'q': '&#8233;',
      'r': '&#8234;',
      's': '&#8235;',
      't': '&#8236;',
      'u': '&#8237;',
      'v': '&#8238;',
      'w': '&#8239;',
      'x': '&#8287;',
      'y': '&#8288;',
      'z': '&#9289;',
      '0': '&#8290;',
      '1': '&#8291;',
      '2': '&#8292;',
      '3': '&#8293;',
      '4': '&#8294;',
      '5': '&#8295;',
      '6': '&#8296;',
      '7': '&#8297;',
      '8': '&#8298;',
      '9': '&#8299;',
      'ç': '&#8300;',
      'ı': '&#8301;',
      'ğ': '&#8302;',
      'ş': '&#8303;'
    }

    var allReplace = function (text, obj) {
      for (var key in obj) {
        text = text.replace(new RegExp(key, 'g'), obj[key])
      }
      return text
    }

    result = opts.text + '\n-' + allReplace(opts.secretMessage, characters) + '-'
  }

  return result
}
