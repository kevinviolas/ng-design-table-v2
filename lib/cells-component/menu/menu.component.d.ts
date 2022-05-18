import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
interface IMenuSettings {
    Label: string;
    Icon?: string;
    Type: 'link' | 'modal';
    Value: any;
    Data?: any;
}
export declare class MenuComponent implements OnInit {
    menuSettings: IMenuSettings[];
    callHandler: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    action(menu: IMenuSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "menu", never, { "menuSettings": "menuSettings"; }, { "callHandler": "callHandler"; }, never, never>;
}
export {};