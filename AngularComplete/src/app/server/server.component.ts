import { Component, OnInit } from "@angular/core";

@Component({
    // selector:'[app-server]', select by attribute
    // selector:'.app-server', select by class
    selector:'app-server', // select by element
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    serverId :number = 10;
    serverStatus : string = 'Offline';
    ngOnInit() : void {
        console.log('check');
    }
}