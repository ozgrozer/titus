var reference = {
  '1': '&#8288;',
  '2': '&#8289;',
  '3': '&#8290;',
  '4': '&#8291;'
}

var characters = {
  'a': '111',
  'b': '112',
  'c': '113',
  'd': '114',
  'e': '121',
  'f': '122',
  'g': '123',
  'h': '124',
  'i': '131',
  'j': '132',
  'k': '133',
  'l': '134',
  'm': '141',
  'n': '142',
  'o': '143',
  'p': '144',
  'q': '211',
  'r': '212',
  's': '213',
  't': '214',
  'u': '221',
  'v': '222',
  'w': '223',
  'x': '224',
  'y': '231',
  'z': '232',
  ' ': '233'
}

var charactersEncode = function () {
  var result = {}

  for (var character in characters) {
    var characterHash = characters[character]
    var newHash = ''
    newHash += characterHash[0].replace(new RegExp(characterHash[0]), reference[characterHash[0]])
    newHash += characterHash[1].replace(new RegExp(characterHash[1]), reference[characterHash[1]])
    newHash += characterHash[2].replace(new RegExp(characterHash[2]), reference[characterHash[2]])
    result[character] = newHash
  }

  return result
}

var charactersDecode = function () {
  var result = {}

  for (var character in characters) {
    var characterHash = characters[character]
    var newHash = ''
    newHash += characterHash[0].replace(new RegExp(characterHash[0]), reference[characterHash[0]])
    newHash += characterHash[1].replace(new RegExp(characterHash[1]), reference[characterHash[1]])
    newHash += characterHash[2].replace(new RegExp(characterHash[2]), reference[characterHash[2]])
    result[newHash.replace(/&|#|;/g, '')] = character
  }

  return result
}
var result = {
  encode: charactersEncode(),
  decode: charactersDecode()
}

console.log(result)
