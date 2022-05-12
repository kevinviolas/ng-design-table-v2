import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import { TranslateService } from '../../translate.service';
var EquipementStatusComponent = /** @class */ (function () {
    // private params: any = {};
    function EquipementStatusComponent(changeDetectorRefs, service, translate) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.translate = translate;
        this.css = {};
        this.status = '';
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    EquipementStatusComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        var params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        switch (clean) {
            case 'actif':
                this.status = this.translate.translate(this.lang, 'FUNCTIONNAL');
                break;
            case 'inactif':
                this.status = this.translate.translate(this.lang, 'KO');
                break;
        }
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    };
    EquipementStatusComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    EquipementStatusComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TableService },
        { type: TranslateService }
    ]; };
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
    return EquipementStatusComponent;
}());
export { EquipementStatusComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTzNEO0lBU0UsNEJBQTRCO0lBRTVCLG1DQUFvQixrQkFBcUMsRUFBVSxPQUFxQixFQUM5RSxTQUEyQjtRQURqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUM5RSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVI5QixRQUFHLEdBQVEsRUFBRSxDQUFBO1FBR3BCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFNVixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsMkRBQTJEO0lBQzdELENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXRELElBQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7O1dBTzdEO1FBQ0gsSUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ25FLE1BQU07WUFDTixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1NBQ1A7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELCtDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBdEN1QyxpQkFBaUI7Z0JBQW1CLFlBQVk7Z0JBQ25FLGdCQUFnQjs7SUFYNUI7UUFBUixLQUFLLEVBQUU7OzJEQUFjO0lBRWI7UUFBUixLQUFLLEVBQUU7OzJEQUF1QjtJQUV0QjtRQUFSLEtBQUssRUFBRTs7MkRBQWM7SUFMWCx5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQywySkFBaUQ7O1NBRWxELENBQUM7eUNBWXdDLGlCQUFpQixFQUFtQixZQUFZO1lBQ25FLGdCQUFnQjtPQVoxQix5QkFBeUIsQ0FtRHJDO0lBQUQsZ0NBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQW5EWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1lcXVpcGVtZW50LXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gIHB1YmxpYyBjc3M6IGFueSA9IHt9XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcblxuICBzdGF0dXMgPSAnJztcblxuICAvLyBwcml2YXRlIHBhcmFtczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSwgXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIC8vdGhpcy5wYXJhbXMgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5lcXVpcG1lbnRTdGF0dXM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5lcXVpcG1lbnRTdGF0dXM7IC8qe1xuICAgICAgXCJhY3RpZlwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgXCJvdWlcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcbiAgICAgIFwiaHNcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9IUy5wbmdcIixcbiAgICAgIFwiaW5hY3RpZlwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2luYWN0aWYucG5nXCIsXG4gICAgICBcIm5vblwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2luYWN0aWYucG5nXCIsXG4gICAgICBcInNwYXJlXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvc3BhcmUucG5nXCIsXG4gICAgfSovXG4gICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICBzd2l0Y2ggKGNsZWFuKSB7XG4gICAgICBjYXNlICdhY3RpZic6XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMubGFuZywgJ0ZVTkNUSU9OTkFMJyk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luYWN0aWYnOlxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdLTycpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iXX0=