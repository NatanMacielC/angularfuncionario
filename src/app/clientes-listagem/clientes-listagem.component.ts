import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})
export class ClientesListagemComponent implements OnInit {

  clientes: Array<any> = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clientesService.getAll().subscribe((dados: any[]) => this.clientes = dados);
  }

}
