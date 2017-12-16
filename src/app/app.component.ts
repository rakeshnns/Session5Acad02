import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
'<div><input type="text" placeholder="Firstname" id="in"><br><button class = "btn btn-primary btn-lg btn-block">Login</button></div>',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'app';
}
