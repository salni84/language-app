import {Component} from '@angular/core';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {
  public enteredPassword: string;
  public secret: string = 'admin'
  public isAdmin: boolean = false;


  public checkPassword() {
    if (this.enteredPassword === this.secret){
      localStorage.setItem('isAdmin', 'true')
      this.isAdmin = true;
    }
  }

  public logout(){
    localStorage.clear()
    this.isAdmin = false;
  }
}
