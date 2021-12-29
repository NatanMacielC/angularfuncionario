import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario/funcionario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  funcionario: Array<any> = [];

  constructor(private FuncionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.FuncionarioService.getFuncionarioList().subscribe((dados: any[]) => this.funcionario = dados);
  }

}
