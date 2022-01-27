import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-comp', // nome tag de importacao ** tambem pode editar o texto
  templateUrl: './novo-comp.component.html',
  styleUrls: ['./novo-comp.component.css']
})
export class NovoCompComponent implements OnInit {

  //variaveis
  idade: number;
  veiculos:Array<string>;

  constructor() { //boas praticas
    this.idade = 24;
    this.veiculos = ['Tesla', 'Dacia', 'Ford', 'Chevrolet', 'Volgisvagen', 'Fiat', 'Subaru']
   }

  ngOnInit(): void {
    console.log('componente carregou');
    
  }

  subirIdade(){
    this.idade += 1;
  }

  cairIdade(){
    this.idade -= 1;
  }

}
