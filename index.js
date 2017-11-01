var hiddenMessage = function (opts) {
  var result

  if (opts.text.length > 1) {
    var characters = {
      'a': '&#8288;',
      'b': '&#8289;',
      'c': '&#8290;',
      'd': '&#8291;',
      'e': '?',
      'f': '?',
      'g': '?',
      'h': '?',
      'i': '?',
      'j': '?',
      'k': '?',
      'l': '?',
      'm': '?',
      'n': '?',
      'o': '?',
      'p': '?',
      'q': '?',
      'r': '?',
      's': '?',
      't': '?',
      'u': '?',
      'v': '?',
      'w': '?',
      'x': '?',
      'y': '?',
      'z': '?'
    }

    var firstLetterOfText = opts.text.substr(0, 1)
    var restOfText = opts.text.substr(1)
    var allReplace = function (text, obj) {
      for (var key in obj) {
        text = text.replace(new RegExp(key, 'g'), obj[key])
      }
      return text
    }

    result = firstLetterOfText + allReplace(opts.secretMessage, characters) + restOfText
  } else {
    result = 'Minimum 2 characters required.\nBecause secret message will be hidden in the visible letters.'
  }

  return result
}
