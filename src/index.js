const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newArray = [];
    let word = '';
    let result = [];
    for (let i =  0; i < expr.length; i= i+10) {
      let word = expr.slice(i, (i + 10));
        if (word == '**********') {
          word = ' ';
        }
      newArray.push(word);
    }
    for (let i = 0; i < newArray.length; i++) {
      let sent = '';
      if (newArray[i] == ' ') {
        result.push(newArray[i]);
      }
      else {
        for (let k = 0; k < newArray[i].length - 1; k= k+2) {
          word = newArray[i].substr(k, 2);
            if (word == '11') {
              word = '-';
            }
           else if (word == '10') {
               word = '.';
            }
           else {
             word = '';
            }
         sent= sent+word;
        }
      result.push(MORSE_TABLE[sent]);
    }
  }
  return result.join('');
  }
  

module.exports = {
    decode
}