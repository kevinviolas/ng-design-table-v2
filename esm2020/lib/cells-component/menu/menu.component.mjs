import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
import * as i2 from "@angular/material/menu";
import * as i3 from "@angular/common";
export class MenuComponent {
    constructor() {
        this.menuSettings = [];
        this.callHandler = new EventEmitter();
    }
    ngOnInit() {
        console.log(this.menuSettings);
    }
    action(menu) {
        this.callHandler.emit(menu);
    }
}
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MenuComponent, selector: "menu", inputs: { menuSettings: "menuSettings" }, outputs: { callHandler: "callHandler" }, ngImport: i0, template: "<nb-icon [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>", styles: [""], components: [{ type: i1.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }, { type: i2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["matMenuTriggerRestoreFocus", "mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'menu', template: "<nb-icon [matMenuTriggerFor]=\"menu\" [icon]=\"'menu_kebab'\" [size]=\"1.5\"></nb-icon>\n\n<mat-menu #menu=\"matMenu\">\n    <ng-container *ngFor=\"let menu of menuSettings\">\n        <button [ngClass]=\"menu.Class\" (click)=\"action(menu)\" mat-menu-item>\n            <nb-icon [primary]=\"menu.IconColor\" [icon]=\"menu.Icon\" *ngIf=\"menu.Icon\" [size]=\"1.5\"></nb-icon>\n            {{ menu.Label }}\n        </button>    \n    </ng-container>\n    <!--<button mat-menu-item>\n        <nb-icon [icon]=\"'information_circle'\" [size]=\"1.5\"></nb-icon>\n        <span>D\u00E9tail</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'edit_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Modifier</span>\n    </button>\n    <button mat-menu-item>\n        <nb-icon [icon]=\"'display_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Assigner un \u00E9quipement</span>\n    </button>\n    <button class=\"menu-red\" mat-menu-item>\n        <nb-icon [primary]=\"'#F6544C'\" [icon]=\"'delete_1'\" [size]=\"1.5\"></nb-icon>\n        <span>Supprimer</span>\n    </button>-->\n</mat-menu>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { menuSettings: [{
                type: Input
            }], callHandler: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBZ0IvRSxNQUFNLE9BQU8sYUFBYTtJQUl4QjtRQUhTLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUNsQyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFakIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBbUI7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7MEdBWlUsYUFBYTs4RkFBYixhQUFhLCtIQ2hCMUIsa2xDQXlCVzsyRkRURSxhQUFhO2tCQUx6QixTQUFTOytCQUNFLE1BQU07MEVBS1AsWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSU1lbnVTZXR0aW5ncyB7XG4gIExhYmVsOiBzdHJpbmc7XG4gIEljb24/OiBzdHJpbmc7IFxuICBJY29uQ29sb3I/OiBzdHJpbmc7XG4gIFR5cGU6ICdsaW5rJyB8ICdtb2RhbCc7XG4gIFZhbHVlOiBhbnk7XG4gIERhdGE/OiBhbnk7XG4gIENsYXNzPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1lbnVTZXR0aW5nczogSU1lbnVTZXR0aW5nc1tdID0gW107XG4gIEBPdXRwdXQoKSBjYWxsSGFuZGxlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubWVudVNldHRpbmdzKTtcbiAgfVxuXG4gIGFjdGlvbihtZW51OiBJTWVudVNldHRpbmdzKSB7XG4gICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KG1lbnUpXG4gIH1cbn1cbiIsIjxuYi1pY29uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgW2ljb25dPVwiJ21lbnVfa2ViYWInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuXG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51U2V0dGluZ3NcIj5cbiAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJtZW51LkNsYXNzXCIgKGNsaWNrKT1cImFjdGlvbihtZW51KVwiIG1hdC1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8bmItaWNvbiBbcHJpbWFyeV09XCJtZW51Lkljb25Db2xvclwiIFtpY29uXT1cIm1lbnUuSWNvblwiICpuZ0lmPVwibWVudS5JY29uXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAge3sgbWVudS5MYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj4gICAgXG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPCEtLTxidXR0b24gbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2luZm9ybWF0aW9uX2NpcmNsZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxzcGFuPkTDqXRhaWw8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZWRpdF8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+TW9kaWZpZXI8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInZGlzcGxheV8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+QXNzaWduZXIgdW4gw6lxdWlwZW1lbnQ8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtcmVkXCIgbWF0LW1lbnUtaXRlbT5cbiAgICAgICAgPG5iLWljb24gW3ByaW1hcnldPVwiJyNGNjU0NEMnXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPHNwYW4+U3VwcHJpbWVyPC9zcGFuPlxuICAgIDwvYnV0dG9uPi0tPlxuPC9tYXQtbWVudT4iXX0=