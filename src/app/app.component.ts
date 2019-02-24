import { Component } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  user:user;
  onChange(user:user){
    this.user = user;
  }
}
