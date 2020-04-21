const __decorate =
	(this && this.__decorate) ||
	function(decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d;
		if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
			r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
var __metadata =
	(this && this.__metadata) ||
	function(k, v) {
		if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
			return Reflect.metadata(k, v);
	};

import { html, customElement, property, LitElement } from 'lit-element';
import ratingBarScss from './rating-bar-css';
import { styleMap } from 'lit-html/directives/style-map';
import { classMap } from 'lit-html/directives/class-map';
import { i18next } from 'culture-i18n';

let OrxeRatingBar = class OrxeRatingBar extends LitElement {
	constructor() {
		super();
		this.type = 'linear';
		this.rating = 0;
		this.label = '';
		this.actualRating = 0;
		i18next.on('languageChanged', (res) => {
			this.requestUpdate();
		});
	}
	firstUpdated() {
		if (!this.hasAttribute('aria-label')) {
			this._addAriaLabel();
		}
	}
	render() {
		this.actualRating = this.getRating();
		return html`
			${this._renderRatingBar()}
		`;
	}
	_addAriaLabel() {
		let ariaLabel = '0 out of 10';
		if (this.rating && this.label) {
			ariaLabel = `${this.label} ${this.actualRating} out of 10`;
		} else if (this.label) {
			ariaLabel = `${this.label} ${ariaLabel}`;
		} else if (this.rating) {
			ariaLabel = `${this.actualRating} out of 10`;
		}
		this.setAttribute('aria-label', ariaLabel);
	}
	getRating() {
		return !this.rating
			? 0
			: this.rating > 100
			? 10
			: this.rating < 0
			? 0
			: Math.floor(this.rating) / 10;
	}
	_showProgress() {
		const progress = {};
		if (this.type == 'donut') {
			if (this.rating > 100) {
				progress['stroke-dashoffset'] = 0;
			} else if (this.rating < 0) {
				progress['stroke-dashoffset'] = 113.04;
			} else {
				progress['stroke-dashoffset'] = 113.04 * (1 - this.rating / 100);
			}
			return progress;
		} else {
			if (this.rating > 100) {
				progress['width'] = '100%';
			} else if (this.rating < 0) {
				progress['width'] = '0%';
			} else {
				progress['width'] = this.rating + '%';
			}
			return progress;
		}
	}
	_getSvgClasses() {
		if (this.actualRating >= 1 && this.actualRating < 3) {
			return `donut-track--bad`;
		} else if (this.actualRating >= 3 && this.actualRating < 5) {
			return `donut-track--poor`;
		} else if (this.actualRating >= 5 && this.actualRating < 7) {
			return `donut-track--average`;
		} else if (this.actualRating >= 7 && this.actualRating < 8.5) {
			return `donut-track--great`;
		} else if (this.actualRating >= 8.5) {
			return `donut-track--excellent`;
		} else {
			return '';
		}
	}
	_renderRatingBar() {
		if (this.type == 'donut') {
			return html`
				<svg
					data-testid="donut-rating-bar"
					aria-hidden="true"
					class="donut"
					width="40"
					height="40"
					viewBox="0 0 40 40"
				>
					<circle cx="20" cy="20" r="18" class="donut-track" />
					<circle
						data-testid="donut-track-indicator"
						cx="20"
						cy="20"
						r="18"
						style=${styleMap(this._showProgress())}
						class="donut-track__indicator ${this._getSvgClasses()}"
					/>
				</svg>
				<div data-testid="donut-rating" class="donut-track__info">${this.actualRating}</div>
			`;
		} else {
			return html`
				<div aria-hidden="true" data-testid="linear-rating-bar" class="linear-track">
					<div
						data-testid="linear-indicator"
						style=${styleMap(this._showProgress())}
						class="${classMap({
							'linear-track__indicator': true,
							'linear-track--bad': this.actualRating >= 1 && this.actualRating < 3,
							'linear-track--poor': this.actualRating >= 3 && this.actualRating < 5,
							'linear-track--average': this.actualRating >= 5 && this.actualRating < 7,
							'linear-track--great': this.actualRating >= 7 && this.actualRating < 8.5,
							'linear-track--excellent': this.actualRating >= 8.5,
						})}"
					></div>
				</div>
				<div class="linear-track__info">
					<span data-testid="linear-rating-label">${i18next.t(this.label)}</span>
					<span data-testid="linear-rating-value">${this.actualRating}</span>
				</div>
			`;
		}
	}
};
OrxeRatingBar.styles = ratingBarScss;
__decorate(
	[property({ type: String, reflect: true }), __metadata('design:type', String)],
	OrxeRatingBar.prototype,
	'type',
	void 0,
);
__decorate(
	[property({ type: Number, reflect: true }), __metadata('design:type', Object)],
	OrxeRatingBar.prototype,
	'rating',
	void 0,
);
__decorate(
	[property({ type: String, reflect: true }), __metadata('design:type', Object)],
	OrxeRatingBar.prototype,
	'label',
	void 0,
);
OrxeRatingBar = __decorate(
	[customElement('orxe-rating-bar'), __metadata('design:paramtypes', [])],
	OrxeRatingBar,
);
export { OrxeRatingBar };
