import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TranslateService = /** @class */ (function () {
    function TranslateService() {
        this.lang = {
            'fr': {
                'SEARCH': "Recherche...",
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails',
                'FUNCTIONAL': 'Fonctionnel',
                'KO': 'HS'
            },
            'en': {
                'SEARCH': "Search...",
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details',
                'FUNCTIONAL': 'Functional',
                'KO': 'HS'
            }
        };
    }
    TranslateService.prototype.translate = function (l, word) {
        return this.lang[l][word];
    };
    TranslateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
    TranslateService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TranslateService);
    return TranslateService;
}());
export { TranslateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFzQkU7UUFyQlEsU0FBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsZUFBZSxFQUFFLHNCQUFzQjtnQkFDdkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFlBQVksRUFBRSxhQUFhO2dCQUMzQixJQUFJLEVBQUUsSUFBSTthQUNiO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixJQUFJLEVBQUUsSUFBSTthQUNiO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixvQ0FBUyxHQUFoQixVQUFpQixDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7SUExQlUsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csZ0JBQWdCLENBMkI1QjsyQkFoQ0Q7Q0FnQ0MsQUEzQkQsSUEyQkM7U0EzQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgUmVjaGVyY2hlLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0FubnVsZXIgbGEgcmVjaGVyY2hlJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ0F1Y3VuIHLDqXN1bHRhdCBjb3JyZXNwb25kYW50JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscycsXG4gICAgICAgICAgJ0ZVTkNUSU9OQUwnOiAnRm9uY3Rpb25uZWwnLFxuICAgICAgICAgICdLTyc6ICdIUydcbiAgICAgIH0sXG4gICAgICAnZW4nOiB7XG4gICAgICAgICAgJ1NFQVJDSCc6IGBTZWFyY2guLi5gLFxuICAgICAgICAgICdPUEVOJzogJ09wZW4nLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0NhbmNlbCBzZWFyY2gnLFxuICAgICAgICAgICdOT19SRVNVTFQnOiAnTm8gY29ycmVzcG9uZGluZyByZXN1bHQnLFxuICAgICAgICAgICdERVRBSUxTJzogJ0RldGFpbHMnLFxuICAgICAgICAgICdGVU5DVElPTkFMJzogJ0Z1bmN0aW9uYWwnLFxuICAgICAgICAgICdLTyc6ICdIUydcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19