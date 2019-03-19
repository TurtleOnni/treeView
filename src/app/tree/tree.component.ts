import { Component, Input, Output, EventEmitter } from '@angular/core';

class Item{
    name: string;
    type: string;
    isExpanded: boolean;
    children: Item[]

    constructor(_name: string, _type: string, _children: Item[]) {

        this.name = _name;
        this.type = _type;
        this.isExpanded = false;
        this.children = _children;
    }
}

@Component({
    selector: 'tree-view',
    templateUrl: 'tree.tmpl.html',
    styleUrls:['tree.component.scss'],
})
export class TreeComponent {
    @Input() Items: Item[];

    constructor() { }

}
