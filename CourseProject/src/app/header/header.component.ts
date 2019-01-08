import { Component, OnInit } from '../../../node_modules/@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styles:[]
})
export class HeaderComponent implements OnInit{
    ngOnInit(): void {
        console.log('hit !!');
    }
}