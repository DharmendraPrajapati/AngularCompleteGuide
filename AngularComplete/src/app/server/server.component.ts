import { Component, OnInit } from "@angular/core";

@Component({
    // selector:'[app-server]', select by attribute
    // selector:'.app-server', select by class
    selector:'app-server', // select by element
    templateUrl: './server.component.html',
    styles: [`
        .online {color:white}
        `]
})
export class ServerComponent implements OnInit {
    serverId :number = 10;
    serverStatus : string = 'Offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online':'Offline';
    }
    ngOnInit() : void {
        //console.log('check');
    }
    getServerStatusColor(): string{
        //console.log('Color check');
        return this.serverStatus === 'Online' ?'green':'red';
    }
}