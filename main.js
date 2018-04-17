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
		this.init( new Date(2018, 5, 1) );
		this.attachEvents();
	}
	init(date) {
		date = date || new Date();
		this.setBaseMonth(date);
		this.setFirstSunday();
		this.showGrid();
		this.showMonths();
	}
	attachEvents() {
		this.calPrevLink.addEventListener('click', this.onChangeMonth.bind(this));
		this.calNextLink.addEventListener('click', this.onChangeMonth.bind(this));
	}
	isFirstMonth(date) {
		return date.getMonth() === this.baseMonth.getMonth();
	}
	isNextMonth(date) {
		const nextMonth = new Date(this.baseMonth);
		nextMonth.setMonth(nextMonth.getMonth() + 1);
		return date.getMonth() === nextMonth.getMonth();
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
		let month = this.baseMonth.getMonth();
		let year  = this.baseMonth.getFullYear();
		if (action === 'next') {
			month = (month !== 11) ? month + 1 : 0;
			year  = (month !== 0) ? year : year + 1;
		} else if (action === 'prev') {
			month = (month !== 0) ? month - 1 : 11;
			year  = (month !== 11) ? year : year - 1;
		}
		this.init( new Date(year, month, 1) );
	}
	setBaseMonth(date) {
		this.baseMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	}
	setFirstSunday() {
		const d = new Date(this.baseMonth);
		d.setDate(d.getDate() - d.getDay());
		this.firstSunday = d;
	}
	showGrid() {
		let count = 0;
		let date = this.firstSunday;
		this.calGrid.innerHTML = '';
		while (count++ < this.NUMBER_OF_DAYS) {
			// create new date
			date = new Date(date);
			// create new node
			let elem = document.createElement('li');
			elem.innerHTML = date.getDate();
			// prepare node attributes
			const formattedDate = this.formatDate(date);
			elem.setAttribute('data-cal-date',formattedDate);
			if (this.isFirstMonth(date)) { elem.setAttribute('class','first-month') }
			if (this.isNextMonth(date)) { elem.setAttribute('class','next-month') }
			// find schedule data
			if ( Schedule[formattedDate] ) {
				const plans = Schedule[formattedDate];
				let ul = document.createElement('ul');
				ul.setAttribute('class','plans');
				for (let i = 0; i < plans.length; i++) {
					let li = document.createElement('li');
					li.append(plans[i]);
					ul.append(li)
				}
				elem.append(ul);
			}
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
