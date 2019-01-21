import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {
 //* @input 
  @Input() element: {type:string,name:string,content:string};
  constructor() { }
  ngOnInit() {
  }

}

/* 
  * @input- As if we do not add anyu decorator to element, we can not use this element outside of the class because class property by default 
    can be use inside the class like private. So if you want to expose this property to outside we need to have decorator. Decorator is not only for class.
    So we will use @input decorator to tell angular that this property will be expose to outside so outside compenent can assign a value to it.
  * If we do not want to bind element property name and we want to bind propertywith some aliases we can use like this 
    @input('srvElement') element: {type:string,name:string,content:string};  and use this alias 'srvElement' in html like [srvElement] inplace of [element].
  * Same aliases will work for output decorator as well in same manner.
  * View Encapsulation - View encapsulation in angular is like we have right now css which says that text inside <p> should be in blue 
    color.But isn't that strange here on this CSS definition which just say paragraph. So it should affect all paragraphs or a whole app.
    Now we might see that it's in the app components. As files so clearly it only belongs to this template.But Because the way CSS works it doesn't really care in which CSS fall.
    You define a rule in CSS. It simply is applied to the whole document normally.So this actually is a behavior enforced by angular which is not the default behavior of the browser.
    Have the goal of encapsulating styles for the component they belong to.This again is not a default behavior.
    Angler gives us this behavior and it's a great behavior because we have that we can make sure that whichever styles we define in us as file will only get applied to the component they belong to.
  * In View Encapsulation - Angular gives three type.
    - Native -> Native Shadow DOM with all it’s goodness.This is deprecated (also knows as ShadowDom)but we can use this to use shadow dom encapsulation feature. Only works with browser who support shadow DOM.
    - Emmulated -> No Shadow DOM but style encapsulation emulation. This feature is default in angular. This option will add an attribute to your element which apply CSS to your specific element not globally(CSS default behavior).
    - None -> No Shadow DOM at all. Therefore, also no style encapsulation.This will apply your CSS globally means angular view encapsulation will not work. If any component which have 'None' encapsulation 
              option and it has CSS on element label (not Id level) then this CSS will get apply as globally on all components no matter whether that component has encapsulation option or not.  
  *  Find more info in Docs file
  * 
  * 
*/