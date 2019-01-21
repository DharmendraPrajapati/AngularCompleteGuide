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
 * Local Reference - Local reference can be use on any HTML element. It can defince as #VeriableName. 
   Local reference will hold or refer not only value, but HTML element itself with its all attribute and properties.
   We can use local reference insteed of two-way binding. check #localRefVar in cockpit template. The thing is here with reference variable is that you can use them only in HTML template.
 * Local reference is one of the way to use elements value and avoid two way binding. but there is one more way we can access element reference is by using '@ViewChild' in Typesceript. 
 * Use @ViewChild(ref Variable Name from template) will give us access of HTML element in typescript. So with the local ref variable we can access ref variable on click event.
 * But sometime we need to access element in typescript, in such case we will use @ViewChild. @ViewChild will give us a ElementRef(it is angular type) and Normal Local Reference will return us a Element it self.
 * So till now we have multiple ways to pass the data across template and component like with two way binding or model binding , 
   @ViewChild and local reference, property/attribute binding with TS property but there is one more way to communicate or pass the data around.
   So sometime we have complex HTML code with lots of condition in html template itself and we want to pass the data into the component from outside the component like from template.
   Like in server-element.component.html, we have code inside the tag <p> where we can simplefy this with new approach. 
   For this approach we have to move entire <p> tag(commented) from server-element.component.html code to app.component.html and place it inside <app-server-element> tag.
   So the default behavior in angular about cutom component that whatever is define between custom tag is lost from DOM itself. So for show the elemnts in custom tags,\
   we have an directive called <ng-content> and this directive does not have its own template and works here like a hook placed in 
   your component to mark the place where angular render the code which is in between of custom tag. 
   This hook will project the code which is written in custom component.

 * 
 */