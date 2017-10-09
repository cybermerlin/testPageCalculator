(() => {
	'use strict';

	const PageCalculator = require('../src/PageCalculator'),
			chai = require('chai'),
			assert = chai.assert;

	describe('PageCalculator', () => {
		let calculator = new PageCalculator(['a', 'b', 'c', 'd', 'e', 'f'], 4);
		it('calculator.getTotalItems(); // should === 6', () => {
			assert(6 === calculator.getTotalItems())
		});
		it('calculator.getTotalPages(); // should === 2', () => {
			assert(2 === calculator.getTotalPages())
		});
		it('calculator.getItemsOnPage(0); // should === 4', () => {
			assert(4 === calculator.getItemsOnPage(0))
		});
		it('calculator.getItemsOnPage(1); // last page -­ should === 2', () => {
			assert(2 === calculator.getItemsOnPage(1))
		});
		it('calculator.getItemsOnPage(2); // should === -­1 since the page is invalid', () => {
			assert(-1 === calculator.getItemsOnPage(2))
		});
		it('calculator.getPageIndexByItem(5); // should === 1 (zero based index)', () => {
			assert(1 === calculator.getPageIndexByItem(5))
		});
		it('calculator.getPageIndexByItem(2); // should === 0', () => {
			assert(0 === calculator.getPageIndexByItem(2))
		});
		it('calculator.getPageIndexByItem(20); // should === -­1', () => {
			assert(-1 === calculator.getPageIndexByItem(20))
		});
		it('calculator.getPageIndexByItem(­10); // should === -­1', () => {
			assert(-1 === calculator.getPageIndexByItem(10))
		});
	});
})();
