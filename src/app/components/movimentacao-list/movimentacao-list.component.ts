import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
 
  //Criar uma variável para interagir com a parte HTML
  movimentacoes:any;
  correntistas:any;
  correntista:any;



  constructor(private movimentacaoService: MovimentacaoService
                      correntistaService: CorrentistaService,) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
    
  }
  listMovimentacoes(): void {
    this.movimentacaoService.list(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
