(() => {
	'use strict';

	const PageCalculator = require('../src/PageCalculator'),
			chai = require('chai'),
			assert = chai.assert;

	describe('PageCalculator', () => {
		describe('[\'a\', \'b\', \'c\', \'d\', \'e\', \'f\'], 4', () => {
			let calculator = new PageCalculator(['a', 'b', 'c', 'd', 'e', 'f'], 4);
			it('calculator.getTotalItems(); // should === 6', () => {
				assert(6 === calculator.getTotalItems())
			});
			it('calculator.getTotalPages(); // should === 2', () => {
				assert(2 === calculator.getTotalPages())
			});

			//region getCountItemsOnPage
			it('calculator.getCountItemsOnPage(-2); // should === -1', () => {
				assert(-1 === calculator.getCountItemsOnPage(-2))
			});
			it('calculator.getCountItemsOnPage(0); // should === 4', () => {
				assert(4 === calculator.getCountItemsOnPage(0))
			});
			it('calculator.getCountItemsOnPage(1); // last page - should === 2', () => {
				assert(2 === calculator.getCountItemsOnPage(1))
			});
			it('calculator.getCountItemsOnPage(2); // should === -­1 since the page is invalid', () => {
				assert(-1 === calculator.getCountItemsOnPage(2))
			});
			//endregion

			//region getPageIndexByItemIndex
			it('calculator.getPageIndexByItemIndex(-2); // should === -1 (zero based index)', () => {
				assert(-1 === calculator.getPageIndexByItemIndex(-2))
			});
			it('calculator.getPageIndexByItemIndex(4); // should === 0 (zero based index)', () => {
				assert(0 === calculator.getPageIndexByItemIndex(4))
			});
			it('calculator.getPageIndexByItemIndex(5); // should === 1 (zero based index)', () => {
				assert(1 === calculator.getPageIndexByItemIndex(5))
			});
			it('calculator.getPageIndexByItemIndex(6); // should === -1 (zero based index)', () => {
				assert(-1 === calculator.getPageIndexByItemIndex(6))
			});
			it('calculator.getPageIndexByItemIndex(2); // should === 0', () => {
				assert(0 === calculator.getPageIndexByItemIndex(2))
			});
			it('calculator.getPageIndexByItemIndex(0); // should === 0', () => {
				assert(0 === calculator.getPageIndexByItemIndex(0))
			});
			it('calculator.getPageIndexByItemIndex(­10); // should === -­1', () => {
				assert(-1 === calculator.getPageIndexByItemIndex(10))
			});
			//endregion
		});

		describe('[\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\'], 4', () => {
			let calculator = new PageCalculator(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 4);
			it('calculator.getTotalItems(); // should === 8', () => {
				assert(8 === calculator.getTotalItems())
			});
			it('calculator.getTotalPages(); // should === 2', () => {
				assert(2 === calculator.getTotalPages())
			});

			//region getCountItemsOnPage
			it('calculator.getCountItemsOnPage(-2); // should === -1', () => {
				assert(-1 === calculator.getCountItemsOnPage(-2))
			});
			it('calculator.getCountItemsOnPage(0); // should === 4', () => {
				assert(4 === calculator.getCountItemsOnPage(0))
			});
			it('calculator.getCountItemsOnPage(1); // last page - should === 4', () => {
				assert(4 === calculator.getCountItemsOnPage(1))
			});
			it('calculator.getCountItemsOnPage(2); // should === -­1 since the page is invalid', () => {
				assert(-1 === calculator.getCountItemsOnPage(2))
			});
			//endregion

			//region getPageIndexByItemIndex
			it('calculator.getPageIndexByItemIndex(-2); // should === -1 (zero based index)', () => {
				assert(-1 === calculator.getPageIndexByItemIndex(-2))
			});
			it('calculator.getPageIndexByItemIndex(4); // should === 0 (zero based index)', () => {
				assert(0 === calculator.getPageIndexByItemIndex(4))
			});
			it('calculator.getPageIndexByItemIndex(7); // should === 1 (zero based index)', () => {
				assert(1 === calculator.getPageIndexByItemIndex(5))
			});
			it('calculator.getPageIndexByItemIndex(8); // should === -1 (zero based index)', () => {
				assert(-1 === calculator.getPageIndexByItemIndex(8))
			});
			it('calculator.getPageIndexByItemIndex(2); // should === 0', () => {
				assert(0 === calculator.getPageIndexByItemIndex(2))
			});
			it('calculator.getPageIndexByItemIndex(0); // should === 0', () => {
				assert(0 === calculator.getPageIndexByItemIndex(0))
			});
			it('calculator.getPageIndexByItemIndex(­10); // should === -­1', () => {
				assert(-1 === calculator.getPageIndexByItemIndex(10))
			});
			//endregion
		})
	});
})();
