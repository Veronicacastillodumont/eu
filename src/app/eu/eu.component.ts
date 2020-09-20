import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome_modulo: string = 'Verónica';
  idade_modulo: string = '30 anos';
  gosto_modulo: string = 'Empanadas';
  urlImagem: string = 'C:\Users\vroni\Desktop\exercicio01\eu\GOPR0435.JPG';

  constructor() { }

  ngOnInit(): void {
  }

}
