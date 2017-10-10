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
			this.data = (ar || []).concat([]);
			/**
			 * limit count items on the page
			 * @property {Number} [limit=25]
			 * @cfg {Number} [limit=25]
			 */
			this.limit = c || 25;
			/**
			 * count of items on the last page
			 * @property {Number} countItemsLastPage
			 */
			this.countItemsLastPage = (this.data.length % this.limit) || this.limit;
			/**
			 * total pages
			 * @property {Number} pages
			 */
			this.pages = Math.ceil(this.data.length / this.limit);
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
			return this.pages
		}

		/**
		 * returns the number of items on the specified page. pageIndex is zero­based.
		 * This method should return -1 for pageIndex values that are out of range.
		 * @param {Number} [n=0] number of page
		 * @return {Number}
		 */
		getCountItemsOnPage(n = 0) {
			let result = -1;
			if (parseInt(n) === n && n >= 0 && n < this.pages) {
				result = n === this.pages - 1
						? this.countItemsLastPage
						: this.limit;
			}
			return result;
		}

		/**
		 * determines what page an item is on. Zero­based indexes.
		 * This method should return -1 for itemIndex values that are out of range.
		 * @param {Number} [i=0] item index
		 * @return {Number}
		 */
		getPageIndexByItemIndex(i = 0) {
			let result = -1;
			if (parseInt(i) === i && i < this.data.length && i >= 0) {
				result = i >= this.limit
						? Math.ceil(i / this.limit) - 1
						: 0;
			}
			return result;
		}
	}

	module.exports = PageCalculator;
})();
