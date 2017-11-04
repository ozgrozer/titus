var reference = {
  '0': '&#8288;',
  '1': '&#8289;',
  '2': '&#8290;',
  '3': '&#8291;'
}

var characters = {
  'a': '000',
  'b': '001',
  'c': '002',
  'd': '003',
  'e': '010',
  'f': '011',
  'g': '012',
  'h': '013',
  'i': '020',
  'j': '021',
  'k': '022',
  'l': '023',
  'm': '030',
  'n': '031',
  'o': '032',
  'p': '033',
  'q': '100',
  'r': '101',
  's': '102',
  't': '103',
  'u': '110',
  'v': '111',
  'w': '112',
  'x': '113',
  'y': '120',
  'z': '121',
  ' ': '122'
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
