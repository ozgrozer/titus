(function (exports) {
  var characters = {
    encode: {
      a: '&#8288;&#8288;&#8288;',
      b: '&#8288;&#8288;&#8289;',
      c: '&#8288;&#8288;&#8290;',
      d: '&#8288;&#8288;&#8291;',
      e: '&#8288;&#8289;&#8288;',
      f: '&#8288;&#8289;&#8289;',
      g: '&#8288;&#8289;&#8290;',
      h: '&#8288;&#8289;&#8291;',
      i: '&#8288;&#8290;&#8288;',
      j: '&#8288;&#8290;&#8289;',
      k: '&#8288;&#8290;&#8290;',
      l: '&#8288;&#8290;&#8291;',
      m: '&#8288;&#8291;&#8288;',
      n: '&#8288;&#8291;&#8289;',
      o: '&#8288;&#8291;&#8290;',
      p: '&#8288;&#8291;&#8291;',
      q: '&#8289;&#8288;&#8288;',
      r: '&#8289;&#8288;&#8289;',
      s: '&#8289;&#8288;&#8290;',
      t: '&#8289;&#8288;&#8291;',
      u: '&#8289;&#8289;&#8288;',
      v: '&#8289;&#8289;&#8289;',
      w: '&#8289;&#8289;&#8290;',
      x: '&#8289;&#8289;&#8291;',
      y: '&#8289;&#8290;&#8288;',
      z: '&#8289;&#8290;&#8289;',
      ' ': '&#8289;&#8290;&#8290;'
    },
    decode: {
      '828882888288': 'a',
      '828882888289': 'b',
      '828882888290': 'c',
      '828882888291': 'd',
      '828882898288': 'e',
      '828882898289': 'f',
      '828882898290': 'g',
      '828882898291': 'h',
      '828882908288': 'i',
      '828882908289': 'j',
      '828882908290': 'k',
      '828882908291': 'l',
      '828882918288': 'm',
      '828882918289': 'n',
      '828882918290': 'o',
      '828882918291': 'p',
      '828982888288': 'q',
      '828982888289': 'r',
      '828982888290': 's',
      '828982888291': 't',
      '828982898288': 'u',
      '828982898289': 'v',
      '828982898290': 'w',
      '828982898291': 'x',
      '828982908288': 'y',
      '828982908289': 'z',
      '828982908290': ' '
    }
  }

  exports.encode = function (opts) {
    var result = ''

    if (opts.text.length > 1) {
      var replaceAll = function (text) {
        text.replace(/ /g, characters.encode[' '])

        for (var key in characters.encode) {
          text = text.replace(new RegExp(key, 'g'), characters.encode[key])
        }

        return text
      }

      var forCondition = opts.text.length > opts.secretMessage.length ? opts.text.length : opts.secretMessage.length
      for (var i = 0; i < forCondition; i++) {
        if (opts.text[i]) result += opts.text[i]
        if (opts.secretMessage[i]) result += replaceAll(opts.secretMessage[i])
      }
    } else {
      result = 'Minimum 2 characters required.'
    }

    return result
  }

  exports.decode = function (opts) {
    var result = ''

    if (opts.text.length > 1) {
      var decode = ''
      var triple = ''
      var tripleCounter = 0

      for (var i = 0, len = opts.text.length; i < len; i++) {
        var realValueOfLetter = opts.text[i].codePointAt()
        var realValueOfLetterString = realValueOfLetter.toString()

        if (realValueOfLetter >= 8288 && realValueOfLetter <= 8291) {
          tripleCounter++
          triple += realValueOfLetterString

          if (tripleCounter === 3) {
            if (characters.decode.hasOwnProperty(triple)) {
              decode += characters.decode[triple]
              triple = ''
              tripleCounter = 0
            }
          }
        }
      }

      result = decode || 'There is no secret message in text.'
    } else {
      result = 'Minimum 2 characters required.'
    }

    return result
  }
}(typeof exports === 'undefined' ? this.titus = {} : exports))
