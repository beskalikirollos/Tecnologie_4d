
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    elencoPersone = [
      { nome: 'Mario', cognome: 'Rossi' },
      { nome: 'Anna', cognome: 'Bianchi' },
      { nome: 'Luigi', cognome: 'Verdi' }
    ]; 
     title = 'lavoro2';
  }

