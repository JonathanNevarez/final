import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  protected title = 'espochapp';
  welcome= 'Welcome to ESPOCH App!..';
  tasks= [
    'Task 1: Complete the Angular project setup',
    'Task 2: Implement the main components',  
    'Task 3: Integrate with the backend API'
  ]
}
