import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer : boolean = false;
serverCreationStatus: string = 'No Server Created';
serverName: string = 'First Name';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created and the server name is '+ this.serverName;
  }

  onServerUpdate(event:Event){
    /*
    this.serverName = event.target.value; 
    So this line will give the error because typescript so not know that the what kind of element this event will give.
    So for this we need to cast this event's target type as HTMLInputElement. 
    Like we need to tell tyepescript that this event's target will be input element type.

    */
    this.serverName = (<HTMLInputElement>event.target).value; 
  }
  onServerNameUpdate(){
    this.serverName="Click Button Server";
  }
}
