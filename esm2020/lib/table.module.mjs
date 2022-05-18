import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TableComponent } from './table.component';
import { CustomerRankComponent } from "./cells-component/customer-rank/customer-rank.component";
import { DateFormatComponent } from "./cells-component/date-format/date-format.component";
import { EquipementStatusComponent } from "./cells-component/equipement-status/equipement-status.component";
import { EquipementTypeComponent } from "./cells-component/equipement-type/equipement-type.component";
import { GenderComponent } from "./cells-component/gender/gender.component";
import { IsMatIconComponent } from "./cells-component/is-mat-icon/is-mat-icon.component";
import { NameAvatarComponent } from "./cells-component/name-avatar/name-avatar.component";
import { OriginComponent } from "./cells-component/origin/origin.component";
import { PhoneDisplayComponent } from "./cells-component/phone-display/phone-display.component";
import { PngIconModule } from "./cells-component/png-icon/png-icon.module";
import { PriorityComponent } from "./cells-component/priority/priority.component";
import { YesNoComponent } from "./cells-component/yes-no/yes-no.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatBadgeModule } from "@angular/material/badge";
import { TableService } from "./table.service";
import { NgxFlagsComponent } from './cells-component/ngx-flag/ngx-flag.component';
import { MenuComponent } from './cells-component/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { NowboardIconModule, NowboardIconService } from "nowboard-icon";
import { Settings } from './Settings';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
export class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
}
TableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TableModule, deps: [{ token: TableModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
TableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TableModule, declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        NgxFlagsComponent,
        MenuComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule, i1.NowboardIconModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        NgxFlagsComponent,
        MatMenuModule,
        NowboardIconModule] });
TableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TableModule, providers: [
        NowboardIconService
    ], imports: [[
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule,
            MatMenuModule,
            NowboardIconModule.forRoot(Settings.Icons_light)
        ], PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule,
        NowboardIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        NgxFlagsComponent,
                        MenuComponent
                    ],
                    imports: [
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule,
                        NowboardIconModule.forRoot(Settings.Icons_light)
                    ],
                    exports: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        NgxFlagsComponent,
                        MatMenuModule,
                        NowboardIconModule
                    ],
                    providers: [
                        NowboardIconService
                    ]
                }]
        }], ctorParameters: function () { return [{ type: TableModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDcEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JB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QXVCO3dCQUN2QixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztxQkFDakQ7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRTt3QkFDVCxtQkFBbUI7cUJBQ3BCO2lCQUNGOzBEQUVvRCxXQUFXOzBCQUFqRCxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7Q3VzdG9tZXJSYW5rQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXRlRm9ybWF0Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0VxdWlwZW1lbnRTdGF0dXNDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXN0YXR1cy9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnRcIjtcbmltcG9ydCB7RXF1aXBlbWVudFR5cGVDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHZW5kZXJDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJc01hdEljb25Db21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9pcy1tYXQtaWNvbi9pcy1tYXQtaWNvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TmFtZUF2YXRhckNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPcmlnaW5Db21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQaG9uZURpc3BsYXlDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50XCI7XG5pbXBvcnQge1BuZ0ljb25Nb2R1bGV9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9wbmctaWNvbi9wbmctaWNvbi5tb2R1bGVcIjtcbmltcG9ydCB7UHJpb3JpdHlDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9wcmlvcml0eS9wcmlvcml0eS5jb21wb25lbnRcIjtcbmltcG9ydCB7WWVzTm9Db21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3JcIjtcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xuaW1wb3J0IHtNYXRTb3J0TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01hdEJhZGdlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2VcIjtcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0Rlc2lnblRhYmxlSW50ZXJmYWNlfSBmcm9tIFwiLi9zZXR0aW5nL0NvbmZpZy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE5neEZsYWdzQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvbmd4LWZsYWcvbmd4LWZsYWcuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge05vd2JvYXJkSWNvbk1vZHVsZSwgTm93Ym9hcmRJY29uU2VydmljZX0gZnJvbSBcIm5vd2JvYXJkLWljb25cIjtcbmltcG9ydCB7U2V0dGluZ3N9IGZyb20gJy4vU2V0dGluZ3MnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxuICAgIERhdGVGb3JtYXRDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcbiAgICBHZW5kZXJDb21wb25lbnQsXG4gICAgSXNNYXRJY29uQ29tcG9uZW50LFxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXG4gICAgT3JpZ2luQ29tcG9uZW50LFxuICAgIFBob25lRGlzcGxheUNvbXBvbmVudCxcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcbiAgICBZZXNOb0NvbXBvbmVudCxcbiAgICBOZ3hGbGFnc0NvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBQbmdJY29uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3QoU2V0dGluZ3MuSWNvbnNfbGlnaHQpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTmd4RmxhZ3NDb21wb25lbnQsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBOb3dib2FyZEljb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTm93Ym9hcmRJY29uU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogVGFibGVNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUYWJsZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlc2lnblRhYmxlSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYWJsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neERlc2lnblRhYmxlX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgVGFibGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=