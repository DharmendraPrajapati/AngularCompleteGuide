import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Complete';
  ngOnInit() : void {
    
  }  
  serverElements = [];
  
  onServerCreated(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({type:'server',name:serverData.serverName,content:serverData.serverContent});
  }
  onBlueprintCreated(serverData:{serverName:string,serverContent:string})
  {
    this.serverElements.push({type:'blueprint',name:serverData.serverName,content:serverData.serverContent});
  }

}
