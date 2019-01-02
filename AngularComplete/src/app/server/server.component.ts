import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    ngOnInit() : void {
        console.log('check');
    }
}