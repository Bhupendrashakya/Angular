import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helloworld';
  imgUrl="assets/BL_logo_square_jpg.jpg";
  url="https://www.bridgelabz.com/";
  ngOnInit(): void{
    this.title="Hello from BridgeLabz ! ";

  }

  onClick($event: Event){
    console.log("Save button is clicked !", Event);
    window.open(this.url, "_blank");

  }
  
}