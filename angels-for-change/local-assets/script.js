const countto = {
    num: 200512,
    elem: document.getElementById('counter'),
}

function splitIntoDigits(number) {
  return number.split()
}

function addZeroes(digit, length) {
  var zeroes = '';
  for (var i=0; i<length; i++) {
    zeroes += '0';
  }
  return digit+zeroes;
}

function animateDigits() {
  var digits = splitIntoDigits(countto.num);
  for (var i=0; i<digits.length; i++) {
    var digit = digits[i];
    
    for (var j=1; j<digit; j++) {
      setInterval(function(currentDigit) {
        var newDigit = addZeroes(currentDigit, digits.length-2);
        renderDigits();
      }, j*100, j);
    }
  }
}

function renderDigits(digitArray, elem=countto.elem) {
  elem.innerHTML = digitArray.map(digit => `${digit}`).join('');
}