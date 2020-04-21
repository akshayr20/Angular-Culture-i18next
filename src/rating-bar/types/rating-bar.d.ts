import { LitElement, TemplateResult } from 'lit-element';
export declare class OrxeRatingBar extends LitElement {
    constructor();
    type: 'linear' | 'donut';
    rating: number;
    label: string;
    private actualRating;
    static styles: import("lit-element").CSSResult;
    firstUpdated(): void;
    render(): TemplateResult;
    private _addAriaLabel;
    getRating(): number;
    private _showProgress;
    private _getSvgClasses;
    private _renderRatingBar;
}
