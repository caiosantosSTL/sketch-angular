import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nome de tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';
  newVar = 'Nova variavel';
}
