/**
 *Dependencie
 */
const calculator = require('vat-rate-calculator')

/**
 * Public
 */
module.exports = creditPurchaseInvoice

function isNumber(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
}

var isArray = Array.isArray || function(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
}

var isNumber = isNumber || function(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/**
 * @params {array} salesInvoice
 * @params {number} vatRate
 * @public
 */
function creditPurchaseInvoice(purchaseInvoice, vatRate) {
  var journal = []
  var purchaseInvoice = arguments[0]
  if (arguments.length === 0 && purchaseInvoice.trim() === '') {
    throw new SyntaxError(`salesInvoiceWithOrNotVat(): At least 1 argument required, but only ${arguments.length} passed`)
  }
  if (arguments.length > 2) {
    throw new SyntaxError(`salesInvoiceWithOrNotVat(): At most 2 arguments, but ${arguments.length} passed`)
  }
  if (!isArray(arguments[0])) {
    throw new TypeError(`salesInvoiceWithOrNotVat(): Argument 1 expected an array, but a "${typeof arguments[0]}" passed`)
  }

  journal[0] = arguments[0][0]
  journal[1] = `Suivant la facture N°${arguments[0][3]}`
  if (!isNumber(arguments[0][2])) {
    throw new SyntaxError(`${arguments[0][2]}: Is not a number`)
  }
  if (arguments[1]) {
    if (!isNumber(arguments[1])) {
      throw new TypeError(`salesInvoiceWithOrNotVat(): Argument 2 expected a number, but a "${typeof arguments[1]}" passed`)
    }

    journal[2] = {
      codes: "40",
      credit: calculator('ATI', arguments[0][2], arguments[1])
    }

    journal[3] = {
      codes: "444",
      debit: calculator('VAT', arguments[0][2], arguments[1])
    }

    journal[4] = {
      codes: arguments[0][1],
      debit: arguments[0][2],
    }
    return journal
  }

  journal[2] = {
    codes: arguments[0][1],
    debit: arguments[0][2]
  }

  journal[3] = {
    codes: "40",
    credit: arguments[0][2],
  }

  return journal
}
