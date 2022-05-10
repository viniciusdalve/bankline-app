import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
 
  //Criar uma variável para interagir com a parte HTML
  movimentacoes:any;

  constructor() { }

  ngOnInit(): void {
  }

}
