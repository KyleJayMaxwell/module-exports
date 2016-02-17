var items = require('./items')
console.log(items);

var now = require('./now')
console.log(now);

var utils = require('./utils')
var encode = utils.encode
var decode = utils.decode
console.log(encode('hello'));
console.log(decode('BOWTIE'));

var flipIt = require('./flip')
console.log(flipIt('Pizza'));

