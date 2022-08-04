import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class StatusIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: StatusIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StatusIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: StatusIconComponent, selector: "status-icon", inputs: { label: "label", src: "src" }, ngImport: i0, template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""], directives: [{ type: i1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltipPosition", "matTooltipDisabled", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: StatusIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'status-icon', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }], src: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztnSEFQVSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwyRkNQaEMsMElBR087MkZESU0sbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7MEVBS2QsS0FBSztzQkFBYixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGF0dXMtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YXR1cy1pY29uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8c3BhbiBtYXRUb29sdGlwPVwie3sgbGFiZWwgfX1cIiBjbGFzcz1cInN0YXR1cyBzdGF0dXMte3tsYWJlbC50b0xvd2VyQ2FzZSgpfX1cIj5cbiAgICA8aW1nIHNyYz1cInt7IHNyYyB9fVwiPlxuICAgIHt7IGxhYmVsIH19XG48L3NwYW4+Il19