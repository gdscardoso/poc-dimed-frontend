import {Component, Input, OnInit} from '@angular/core';
import {ItemResponse} from '../model/item.response';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    @Input()
    item: ItemResponse;

    constructor() {
    }

    ngOnInit() {
    }

}
