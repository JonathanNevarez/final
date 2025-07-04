import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importa RouterModule para el enrutamiento
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'espochapp';
  welcome= 'Welcome to ESPOCH App!..';
  tasks= [
    'Task 1: Complete the Angular project setup',
    'Task 2: Implement the main components',  
    'Task 3: Integrate with the backend API'
  ]
}