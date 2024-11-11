const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
	
	setTotal(newTotal) {
		this.total = newTotal;

		return this.total;
	}

	modulo(num) {
		this.total %= num;

		return this.total;
	}

	squared() {
		return this.total * this.total;
	}
}

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}