var hiddenMessage = function (opts) {
  var result
  var characters = {
    'a': '&#8288;',
    'b': '&#8289;',
    'c': '&#8290;',
    'd': '&#8291;',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z'
  }

  var firstLetterOfText = opts.text.substr(0, 1)
  var restOfText = opts.text.substr(1)
  var allReplace = function (text, obj) {
    for (var key in obj) {
      text = text.replace(new RegExp(key, 'g'), obj[key])
    }
    return text
  }
  var hasUnicode = function (str) {
    return /[^\u0000-\u00ff]/.test(str)
  }

  if (opts.type === 'encode') {
    if (opts.text.length > 1) {
      result = firstLetterOfText + allReplace(opts.secretMessage, characters) + restOfText
    } else {
      result = 'Minimum 2 characters required.\nBecause secret message will be hidden in the visible letters.'
    }
  } else if (opts.type === 'decode') {
    if (opts.text.length > 1) {
      result = hasUnicode(opts.text)
    } else {
      result = 'Minimum 2 characters required.\nBecause secret message is hidden in the visible letters.'
    }
  }

  return result
}
