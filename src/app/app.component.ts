import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="EXAMPLE!";
  constructor(public af:AngularFire){
    console.log(this.af.auth);
  }
}
