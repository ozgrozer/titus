var hiddenMessage = function (opts) {
  var result = ''
  var characters1 = {
    'a': '&#8288;',
    'b': '&#8289;',
    'c': '&#8290;',
    'd': '&#8291;'
  }
  var characters2 = {
    '2060': 'a',
    '2061': 'b',
    '2062': 'c',
    '2063': 'd'
  }

  if (opts.text.length > 1) {
    if (opts.type === 'encode') {
      var firstLetterOfInput = opts.text.substr(0, 1)
      var restOfInput = opts.text.substr(1)
      var replaceAll = function (text, obj) {
        for (var key in obj) {
          text = text.replace(new RegExp(key, 'g'), obj[key])
        }
        return text
      }
      result = firstLetterOfInput + replaceAll(opts.secretMessage, characters1) + restOfInput
    } else if (opts.type === 'decode') {
      var decodeUnicode = function (text) {
        var collect = ''
        for (var i = 0, len = text.length; i < len; i++) {
          var letter = text[i]
          var letterToUnicode = letter.codePointAt(0).toString(16)
          if (characters2.hasOwnProperty(letterToUnicode)) {
            collect += characters2[letterToUnicode]
          }
        }
        return collect
      }
      result = decodeUnicode(opts.text) || 'There is no secret message in text.'
    }
  } else {
    result = 'Minimum 2 characters required.'
  }

  return result
}
