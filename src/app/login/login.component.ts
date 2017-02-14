import { Component, OnInit } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private provid = ['github','twitter','facebook','google','emailpwd']
  authState:FirebaseAuthState
  constructor(public af:AngularFire,private router:Router) {
    //this.af.auth.subscribe(auth=>{ console.log(auth)});
    //this.authState = this.af.auth.getAuth();

    this.af.auth.subscribe((state: FirebaseAuthState) => {
        this.authState = state;
        if(state != null){
          console.log(state);
        }
    });
  }

  ngOnInit() {
  }
  loginTwitter(){
    this.af.auth.login({
      provider:AuthProviders.Twitter,
      method:AuthMethods.Popup
    })
    .then(res=>{
      alert('login complete');
      this.router.navigate(['/']);
    })
    .catch(err=> alert(err.message));
  }
  loginFacebook(){
    this.af.auth.login({
      provider:2,
      method:AuthMethods.Popup
    })
    .then(res=>{
      alert('login complete');
      this.router.navigate(['/']);
    })
    .catch(err=> alert(err.message));
  }
  loginGoogle(){
    this.af.auth.login({
      provider:AuthProviders.Google,
      method:AuthMethods.Popup
    })
    .then(res=>{
      alert('login complete');
      this.router.navigate(['/']);
    })
    .catch(err=> alert(err.message));
  }
  loginPassword(email:string,pwd:string){
    this.af.auth.login({
      email:email,
      password:pwd
    },
    {
      provider:AuthProviders.Password,
      method:AuthMethods.Password
    })
    .then(res=>alert(res.provider))
    .catch(err=> alert(err.message));
  }
  overrideLogin(){
    this.af.auth.login({
      provider:AuthProviders.Anonymous,
      method:AuthMethods.Anonymous
    })
  }
  signup(email:string,pwd:string){
    //create user
    this.af.auth.createUser({
      email:email,
      password:pwd
    })
    .then(res=>{
      res.auth.sendEmailVerification();
      if(!res.auth.emailVerified){
      }
    })
    .catch(err=>{alert(err.message)});
    console.log('sign up')

  }
  logout(){
    this.af.auth.logout();
  }

}
export interface FirebaseAuthState {
  uid: string;
  provider: AuthProviders;
  auth: firebase.User;
  expires?: number;
  github?: firebase.UserInfo;
  google?: firebase.UserInfo;
  twitter?: firebase.UserInfo;
  facebook?: firebase.UserInfo;
  anonymous?: boolean;
}
