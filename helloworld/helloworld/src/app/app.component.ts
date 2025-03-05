import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloworld';
  ngOnInit(): void{
    this.title="Hello from BridgeLabz ! ";
   
  }
  
}