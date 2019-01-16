import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
@Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
@ViewChild('localRefViewChild') localRef : ElementRef;
  constructor() { }
  ngOnInit() { }

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  checkLocalRef(localref){
    console.log(localref);
    console.log(localref.value);
  }
  checkLocalRefViewChild(){
    console.log(this.localRef);
    console.log(this.localRef.nativeElement.value);
    console.log(this.localRef.nativeElement);
  }
}
/**
 * Local Reference - Local reference can be use on any HTML element. It can defince as #VeriableName. Local reference will hold Element with its all attribute and properties not only value.
   We can use local reference insteed of two-way binding. check #localRefVar in template. The thing is here with reference variable is that you can use them only in HTML template.
 * Local reference is one of the way to use elements value and avoid two way binding. but there is one more way we can access element reference is by using '@ViewChild' 
 * Use @ViewChild(ref Variable Name from template) will give us access of HTML element in typescript. So with the local ref variable we can access ref variable on click event.
 * But sometime we need to access element in typescript, in such case we will use @ViewChild. @ViewChild will give us a ElementRef(it is angular type) and Normal Local Reference will return us a Element it self.
 * 
 * 
 */