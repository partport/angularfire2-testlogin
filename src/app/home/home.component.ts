import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public selectsize:Array<string>=['small','medium','large']
  items: FirebaseListObservable<any[]>;
  sizeSubject:Subject<any>;
  constructor(public af: AngularFire) {
    this.sizeSubject = new Subject();
    //this.items = af.database.list('/item');
    this.items = af.database.list('/items',
    {
      query: {
        orderByChild: 'size',
        equalTo: this.sizeSubject
      }
    }),
    err=>{
      console.log('sss')
    };
  }
  filterBy(size: string) {
    this.sizeSubject.next(size);
  }
  addItem(newName:string,newSize:number){
    this.items.push({text:newName,size:newSize}).catch(err=>alert(err.message));
  }
  updateItem(key:string,newText:string,newSize:string){
    this.items.update(key,{text:newText,size:newSize}).catch(err=>alert(err.message));
  }
  deleteItem(key:string){
    this.items.remove(key).catch(err=>alert(err.message));
  }
  showAll(){
    this.items = this.af.database.list('/item');
  }
  dellAll(){
    this.items.remove().catch(err=>alert(err.message));
  }

}
