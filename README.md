### General accounting journal

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install general-journal
```

### API
```js
const journal = require("general-journal")
```

### For sales
## journal.cashSales(
	[dades, codes, amount-tax-free, doc-id], 
	vat-rate
)
```js
journal.cashSales(
	["05/09/2022","701",50000,"001A00AB"],
	18
) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "701", debit: 50000},
		{codes: "443", credit: 9000},
		{codes: "57", credit: 59000}
	]
```
## journal.cashSales(
	[dades, codes, amount-tax-free, doc-id]
)
```js
journal.cashSales(
	["05/09/2022","701",50000,"001A00AB"]
)//=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "701", debit: 50000},
		{codes: "57", credit: 50000}
	]
```

## journal.salesOnCredit(
	[dades, codes, amount-tax-free, doc-id], 
	vat-rate
)
```js
journal.salesOnCredit(["05/09/2022","701",50000,"001A00AB"],18) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "701", debit: 50000},
		{codes: "443", credit: 9000},
		{codes: "411", credit: 59000}
	]
```
## journal.salesOnCredit(
	[dades, codes, amount-tax-free, doc-id]
)
```js
journal.salesOnCredit(
	["05/09/2022","701",50000,"001A00AB"]
)//=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "701", debit: 50000},
		{codes: "411", credit: 50000}
	]
```

## journal.salesByBankTransfer(
	[dades, codes, amount-tax-free, doc-id], 
	vat-rate
)
```js
journal.salesByBankTransfer(
	["05/09/2022","701",50000,"001A00AB"],
	18
) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "701", debit: 50000},
		{codes: "443", credit: 9000},
		{codes: "52", credit: 59000}
	]
```
## journal.salesByBankTransfer(
	[dades, codes, amount-tax-free, doc-id]
)
```js
journal.salesByBankTransfer(
	["05/09/2022","701",50000,"001A00AB"]
)//=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "701", debit: 50000},
		{codes: "52", credit: 50000}
	]
```

### For purchase jounal

## journal.cashPurchase(
	[dades, codes, amount-tax-free, doc-id], 
	vat-rate
)
```js
journal.cashPurchase(
	["05/09/2022","601",50000,"001A00AB"],
	18
) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "601", debit: 50000},
		{codes: "444", debit: 9000},
		{codes: "57", credit: 59000}
	]
```
## journal.cashPurchase(
	[dades, codes, amount-tax-free, doc-id]
)
```js
journal.cashPurchase(
	["05/09/2022","601",50000,"001A00AB"]
)//=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "601", debit: 50000},
		{codes: "57", credit: 50000}
	]
```

## journal.purchaseOnCredit(
	[dades, codes, amount-tax-free, doc-id], 
	vat-rate
)
```js
journal.purchaseOnCredit(
	["05/09/2022","601",50000,"001A00AB"],
	18
) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "601", debit: 50000},
		{codes: "444", debit: 9000},
		{codes: "40", credit: 59000}
	]
```
## journal.purchaseOnCredit(
		[dades, codes, amount-tax-free, doc-id]
	)
```js
journal.purchaseOnCredit(
	["05/09/2022","701",50000,"001A00AB"]
)//=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "601", debit: 50000},
		{codes: "40", credit: 50000}
	]
```

## journal.purchaseByBankTransfer(
	[dades, codes, amount-tax-free, doc-id], 
	vat-rate
)
```js
journal.purchaseByBankTransfer(
	["05/09/2022","601",50000,"001A00AB"],
	18
) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "601", credit: 50000},
		{codes: "444", credit: 9000},
		{codes: "52", debit: 59000}
	]
```
## journal.purchaseByBankTransfer(
	[dades, codes, amount-tax-free, doc-id]
)
```js
journal.purchaseByBankTransfer(
	["05/09/2022","601",50000,"001A00AB"]
) //=>
	[
		"05/09/2022",
		"Suivant la facture N°001A00AB",
		{codes: "601", credit: 50000},
		{codes: "52", debit: 50000}
	]
```
