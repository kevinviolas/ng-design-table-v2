import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class StatusIconComponent {
    constructor() { }
    ngOnInit() {
        switch (this.label.toLocaleLowerCase()) {
            case 'En cours':
            case 'Ongoing':
                this.src = '/assets/icons/Status/yellow-dot.svg';
                break;
            default:
                this.src = '/assets/icons/status/green-dot.svg';
                break;
        }
    }
}
StatusIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: StatusIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StatusIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: StatusIconComponent, selector: "status-icon", inputs: { label: "label" }, ngImport: i0, template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""], directives: [{ type: i1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltipPosition", "matTooltipDisabled", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: StatusIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'status-icon', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN0QyxLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQTtnQkFDbEQsTUFBTTtZQUNOO2dCQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsb0NBQW9DLENBQUM7Z0JBQ2xELE1BQU07U0FDUDtJQUNILENBQUM7O2dIQWpCVSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwrRUNQaEMsMElBR087MkZESU0sbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7MEVBS2QsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0YXR1cy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXR1cy1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhdHVzLWljb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBcbiAgc3JjOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAnRW4gY291cnMnOlxuICAgICAgY2FzZSAnT25nb2luZyc6XG4gICAgICAgIHRoaXMuc3JjID0gJy9hc3NldHMvaWNvbnMvU3RhdHVzL3llbGxvdy1kb3Quc3ZnJ1xuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgdGhpcy5zcmMgPSAnL2Fzc2V0cy9pY29ucy9zdGF0dXMvZ3JlZW4tZG90LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxufVxuIiwiPHNwYW4gbWF0VG9vbHRpcD1cInt7IGxhYmVsIH19XCIgY2xhc3M9XCJzdGF0dXMgc3RhdHVzLXt7bGFiZWwudG9Mb3dlckNhc2UoKX19XCI+XG4gICAgPGltZyBzcmM9XCJ7eyBzcmMgfX1cIj5cbiAgICB7eyBsYWJlbCB9fVxuPC9zcGFuPiJdfQ==