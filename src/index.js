module.exports = function toReadable (number) {
    let readableNumbers = '';
	let arrayNumbers = ['', 'one', 'two', 'three', 'four', 'five',
     'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let arrayNumbersTen = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
     'seventy', 'eighty', 'ninety'];

	if (number == 0) {return 'zero';}

	let firstNumber = parseInt(number / 100);
	if (firstNumber > 0){
		readableNumbers = arrayNumbers[firstNumber] + ' hundred';	
	}

	let secondNumber = number % 100;
	if (secondNumber > 19){
		let tensTen = parseInt(secondNumber / 10);
		readableNumbers = readableNumbers + ' ' + arrayNumbersTen[tensTen];

	} else if (secondNumber >= 10){
		readableNumbers = readableNumbers + ' ' + arrayNumbers[secondNumber];
    	return readableNumbers.trim();
	}

	let thirdNumber = number % 10;
	readableNumbers = readableNumbers + ' ' + arrayNumbers[thirdNumber];
	
	return readableNumbers.trim();
  }

