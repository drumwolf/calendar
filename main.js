class TwoMonthCalendar {
	constructor(date) {
		// declare all variables
		this.NUMBER_OF_DAYS = 63;
		this.baseMonth;
		this.firstSunday;
		// dom elements
		this.calGrid = document.getElementById('cal-grid');
		this.calHeaderMonth = document.querySelector('.cal-header-month');
		this.calPrevLink = document.querySelector('[data-action="prev"]');
		this.calNextLink = document.querySelector('[data-action="next"]');
		// run operations
		this.init();
	}
	init(date) {
		this.setBaseMonth(date);
		this.setFirstSunday();
		this.showGrid();
		this.showMonths();
		this.attachEvents();
	}
	attachEvents() {
		this.calPrevLink.addEventListener('click', this.onChangeMonth.bind(this));
		this.calNextLink.addEventListener('click', this.onChangeMonth.bind(this));
	}
	isFirstMonth(date) {
		return date.getMonth() === this.baseMonth.getMonth();
	}
	isNextMonth(date) {
		return date.getMonth() === this.baseMonth.getMonth() + 1;
	}
	formatDate(date) {
		const year = date.getYear() + 1900;
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${year}-${ (month < 10) ? '0' : '' }${month}-${ (day < 10) ? '0' : '' }${day}`;
	}
	onChangeMonth(e) {
		e.preventDefault();
		const action = e.target.dataset.action;
		console.log(action)
	}
	setBaseMonth(date) {
		const d = date || new Date();
		this.baseMonth = new Date(d.getFullYear(), d.getMonth(), 1);
	}
	setFirstSunday() {
		const d = this.baseMonth;
		d.setDate(d.getDate() - d.getDay());
		this.firstSunday = d;
	}
	showGrid() {
		let count = 0;
		let date = this.firstSunday;
		while (count++ < this.NUMBER_OF_DAYS) {
			// create new date
			date = new Date(date);
			// create new node
			let elem = document.createElement('li');
			elem.innerHTML = date.getDate();
			// prepare node attributes
			elem.setAttribute('data-cal-date',this.formatDate(date));
			if (this.isFirstMonth(date)) { elem.setAttribute('class','first-month') }
			if (this.isNextMonth(date)) { elem.setAttribute('class','next-month') }
			// append new node
			this.calGrid.append(elem);
			// move date forward
			date.setDate( date.getDate() + 1 );
		}
	}
	showMonths() {
		// determine months
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const index = this.baseMonth.getMonth();
		const isDecember  = (index === months.length - 1);
		const first_month = months[index];
		const next_month  = (!isDecember) ? months[index + 1] : months[0];
		// determine years
		const year = this.baseMonth.getFullYear();
		const first_year  = (!isDecember) ? '' : year;
		const next_year   = (!isDecember) ? year : year + 1;
		// output final result
		this.calHeaderMonth.innerHTML = `${first_month} ${first_year} / ${next_month} ${next_year}`;
	}
}

new TwoMonthCalendar();
