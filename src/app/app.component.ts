import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';
  name:string = 'Charlie';

constructor(){
  this.chaneName('CHar3lie')
}

chaneName(name:string):void{
  this.name = name;
}

}
