import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TranslateService = class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'SEARCH': `Recherche...`,
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails',
                'FUNCTIONAL': 'Fonctionnel',
                'KO': 'HS'
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details',
                'FUNCTIONAL': 'Functional',
                'KO': 'HS'
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
};
TranslateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
TranslateService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], TranslateService);
export { TranslateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFzQjNCO1FBckJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsSUFBSSxFQUFFLElBQUk7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsV0FBVztnQkFDckIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsSUFBSSxFQUFFLElBQUk7YUFDYjtTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTs7QUEzQlksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7O0dBQ1csZ0JBQWdCLENBMkI1QjtTQTNCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGxhbmcgPSB7XG4gICAgICAnZnInOiB7XG4gICAgICAgICAgJ1NFQVJDSCc6IGBSZWNoZXJjaGUuLi5gLFxuICAgICAgICAgICdPUEVOJzogJ091dnJpcicsXG4gICAgICAgICAgJ0NBTkNFTF9TRUFSQ0gnOiAnQW5udWxlciBsYSByZWNoZXJjaGUnLFxuICAgICAgICAgICdOT19SRVNVTFQnOiAnQXVjdW4gcsOpc3VsdGF0IGNvcnJlc3BvbmRhbnQnLFxuICAgICAgICAgICdERVRBSUxTJzogJ0TDqXRhaWxzJyxcbiAgICAgICAgICAnRlVOQ1RJT05BTCc6ICdGb25jdGlvbm5lbCcsXG4gICAgICAgICAgJ0tPJzogJ0hTJ1xuICAgICAgfSxcbiAgICAgICdlbic6IHtcbiAgICAgICAgICAnU0VBUkNIJzogYFNlYXJjaC4uLmAsXG4gICAgICAgICAgJ09QRU4nOiAnT3BlbicsXG4gICAgICAgICAgJ0NBTkNFTF9TRUFSQ0gnOiAnQ2FuY2VsIHNlYXJjaCcsXG4gICAgICAgICAgJ05PX1JFU1VMVCc6ICdObyBjb3JyZXNwb25kaW5nIHJlc3VsdCcsXG4gICAgICAgICAgJ0RFVEFJTFMnOiAnRGV0YWlscycsXG4gICAgICAgICAgJ0ZVTkNUSU9OQUwnOiAnRnVuY3Rpb25hbCcsXG4gICAgICAgICAgJ0tPJzogJ0hTJ1xuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICB9XG59XG4iXX0=