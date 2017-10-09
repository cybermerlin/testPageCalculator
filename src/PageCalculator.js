(() => {
	'use strict';

	/**
	 * helper to obtaining information about an array if need to split it into pages
	 * @class PageCalculator
	 */
	class PageCalculator {
		constructor(ar, c) {
			/**
			 * items data
			 * @property {Array} data
			 * @cfg {Array} data
			 */
			this.data = ar.concat([]);
			/**
			 * limit count items on the page
			 * @property {Number} [limit=25]
			 * @cfg {Number} [limit=25]
			 */
			this.limit = c || 25;
			/**
			 * count of items on the last page
			 * @propert {Number} cntItemsLastPage
			 */
			this.cntItemsLastPage = this.data.length % this.limit;
			/**
			 * total pages
			 * @property {Number} pages
			 */
			this.pages = Math.floor(this.data.length / this.limit)
		}


		/**
		 * returns the number of items within the entire collection.
		 * @return {Number}
		 */
		getTotalItems() {
			return this.data.length;
		}

		/**
		 * returns the number of pages.
		 * @return {Number}
		 */
		getTotalPages() {
			return Math.ceil(this.data.length / this.limit)
		}

		/**
		 * returns the number of items on the specified page. pageIndex is zero­based.
		 * This method should return -­1 for pageIndex values that are out of range.
		 * @param {Number} [n=0]
		 * @return {Number}
		 */
		getItemsOnPage(n = 0) {
			return n > this.pages || n < 0
					? -1
					: n === this.pages
							? this.cntItemsLastPage
							: this.limit;
		}

		/**
		 * determines what page an item is on. Zero­based indexes.
		 * This method should return ­-1 for itemIndex values that are out of range.
		 * @param {Number} [i=0]
		 * @return {Number}
		 */
		getPageIndexByItem(i = 0) {
			return i > this.data.length || i < 0
					? -1
					: i > this.limit
							? Math.ceil(i / this.limit) - 1
							: 0
		}
	}

	module.exports = PageCalculator;
})();
