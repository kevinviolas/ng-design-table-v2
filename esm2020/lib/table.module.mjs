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
import { CollabMenuComponent } from './cells-component/collab-menu/collab-menu.component';
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
        CollabMenuComponent], imports: [PngIconModule,
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
                        CollabMenuComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDeEYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDMUcsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDcEcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxZQUFZLENBQUM7OztBQTZEcEMsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBb0MsWUFBMEI7UUFDNUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNEI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUNqRCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7d0dBaEJVLFdBQVcsa0JBQzZCLFdBQVc7eUdBRG5ELFdBQVcsaUJBMURwQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsbUJBQW1CLGFBR25CLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGFBQWEsb0NBSWIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixrQkFBa0I7eUdBTVQsV0FBVyxhQUpYO1FBQ1QsbUJBQW1CO0tBQ3BCLFlBekNRO1lBQ1AsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQ2pELEVBY0MsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBRWQsYUFBYTtRQUNiLGtCQUFrQjsyRkFNVCxXQUFXO2tCQTVEdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO3FCQUNqRDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGtCQUFrQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULG1CQUFtQjtxQkFDcEI7aUJBQ0Y7MERBRW9ELFdBQVc7MEJBQWpELFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDdXN0b21lclJhbmtDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50XCI7XG5pbXBvcnQge0RhdGVGb3JtYXRDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9kYXRlLWZvcm1hdC9kYXRlLWZvcm1hdC5jb21wb25lbnRcIjtcbmltcG9ydCB7RXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcGVtZW50VHlwZUNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtdHlwZS9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0dlbmRlckNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2dlbmRlci9nZW5kZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0lzTWF0SWNvbkNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYW1lQXZhdGFyQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50XCI7XG5pbXBvcnQge09yaWdpbkNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L29yaWdpbi9vcmlnaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Bob25lRGlzcGxheUNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3Bob25lLWRpc3BsYXkvcGhvbmUtZGlzcGxheS5jb21wb25lbnRcIjtcbmltcG9ydCB7UG5nSWNvbk1vZHVsZX0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHtQcmlvcml0eUNvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtZZXNOb0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3llcy1uby95ZXMtbm8uY29tcG9uZW50XCI7XG5pbXBvcnQge01hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TWF0QmFkZ2VNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9iYWRnZVwiO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuL3RhYmxlLnNlcnZpY2VcIjtcbmltcG9ydCB7RGVzaWduVGFibGVJbnRlcmZhY2V9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTmd4RmxhZ3NDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9uZ3gtZmxhZy9uZ3gtZmxhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFiTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L2NvbGxhYi1tZW51L2NvbGxhYi1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtOb3dib2FyZEljb25Nb2R1bGUsIE5vd2JvYXJkSWNvblNlcnZpY2V9IGZyb20gXCJub3dib2FyZC1pY29uXCI7XG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuL1NldHRpbmdzJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyUmFua0NvbXBvbmVudCxcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFR5cGVDb21wb25lbnQsXG4gICAgR2VuZGVyQ29tcG9uZW50LFxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcbiAgICBOYW1lQXZhdGFyQ29tcG9uZW50LFxuICAgIE9yaWdpbkNvbXBvbmVudCxcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXG4gICAgUHJpb3JpdHlDb21wb25lbnQsXG4gICAgWWVzTm9Db21wb25lbnQsXG4gICAgTmd4RmxhZ3NDb21wb25lbnQsXG4gICAgQ29sbGFiTWVudUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUG5nSWNvbk1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNYXRCYWRnZU1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE5vd2JvYXJkSWNvbk1vZHVsZS5mb3JSb290KFNldHRpbmdzLkljb25zX2xpZ2h0KVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxuICAgIERhdGVGb3JtYXRDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcbiAgICBHZW5kZXJDb21wb25lbnQsXG4gICAgSXNNYXRJY29uQ29tcG9uZW50LFxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXG4gICAgT3JpZ2luQ29tcG9uZW50LFxuICAgIFBob25lRGlzcGxheUNvbXBvbmVudCxcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcbiAgICBZZXNOb0NvbXBvbmVudCxcbiAgICBQbmdJY29uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE5neEZsYWdzQ29tcG9uZW50LFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5vd2JvYXJkSWNvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IFRhYmxlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGFibGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnX19OZ3hEZXNpZ25UYWJsZV9fJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIFRhYmxlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cblxufVxuIl19