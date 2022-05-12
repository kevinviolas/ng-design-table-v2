import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import { TranslateService } from '../../translate.service';
let EquipementStatusComponent = class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service, translate) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.translate = translate;
        this.css = {};
        this.status = '';
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        console.log(clean);
        switch (clean) {
            case 'actif':
                this.status = this.translate.translate(this.lang, 'FUNCTIONAL');
                break;
            case 'inactif':
                this.status = this.translate.translate(this.lang, 'KO');
                break;
        }
        console.log(status);
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
EquipementStatusComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TableService },
    { type: TranslateService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementStatusComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], EquipementStatusComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EquipementStatusComponent.prototype, "lang", void 0);
EquipementStatusComponent = __decorate([
    Component({
        selector: 'app-equipement-status',
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n    {{ status }}\n</span>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TableService,
        TranslateService])
], EquipementStatusComponent);
export { EquipementStatusComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTzNELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBU3BDLDRCQUE0QjtJQUU1QixZQUFvQixrQkFBcUMsRUFBVSxPQUFxQixFQUM5RSxTQUEyQjtRQURqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUM5RSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVI5QixRQUFHLEdBQVEsRUFBRSxDQUFBO1FBR3BCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFNVixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsMkRBQTJEO0lBQzdELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXRELE1BQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7O1dBTzdEO1FBQ0gsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUNOLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFELE1BQU07U0FDUDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FFRixDQUFBOztZQTFDeUMsaUJBQWlCO1lBQW1CLFlBQVk7WUFDbkUsZ0JBQWdCOztBQVg1QjtJQUFSLEtBQUssRUFBRTs7dURBQWM7QUFFYjtJQUFSLEtBQUssRUFBRTs7dURBQXVCO0FBRXRCO0lBQVIsS0FBSyxFQUFFOzt1REFBYztBQUxYLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLDJKQUFpRDs7S0FFbEQsQ0FBQztxQ0FZd0MsaUJBQWlCLEVBQW1CLFlBQVk7UUFDbkUsZ0JBQWdCO0dBWjFCLHlCQUF5QixDQXFEckM7U0FyRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC1zdGF0dXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG5cbiAgc3RhdHVzID0gJyc7XG5cbiAgLy8gcHJpdmF0ZSBwYXJhbXM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBUYWJsZVNlcnZpY2UsIFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICAvL3RoaXMucGFyYW1zID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuZXF1aXBtZW50U3RhdHVzO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcblxuICAgIGNvbnN0IHBhcmFtczogYW55ID0gdGhpcy5zZXJ2aWNlLnNldHRpbmdDb25maWcuZXF1aXBtZW50U3RhdHVzOyAvKntcbiAgICAgIFwiYWN0aWZcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcbiAgICAgIFwib3VpXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICBcImhzXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvSFMucG5nXCIsXG4gICAgICBcImluYWN0aWZcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmFjdGlmLnBuZ1wiLFxuICAgICAgXCJub25cIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmFjdGlmLnBuZ1wiLFxuICAgICAgXCJzcGFyZVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL3NwYXJlLnBuZ1wiLFxuICAgIH0qL1xuICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgY29uc29sZS5sb2coY2xlYW4pO1xuICAgIHN3aXRjaCAoY2xlYW4pIHtcbiAgICAgIGNhc2UgJ2FjdGlmJzpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnRlVOQ1RJT05BTCcpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmFjdGlmJzpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnS08nKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iXX0=