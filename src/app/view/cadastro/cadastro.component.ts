import { Component } from '@angular/core';
import { FuncionarioService } from '../funcionario/funcionario.service';
import { Funcionario } from '../funcionario/funcionario'
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  title = 'funcionario';
  baseURL = 'http://localhost:8080/api/funcionario';
  formFuncionario!: FormGroup;
  isSubmitted!: boolean;
  funcionarioList: any;
  Funcionario: any;

  constructor(private FuncionarioService : FuncionarioService, 
    private http: HttpClient, 
    private fb: FormBuilder) {} 

  ngOnInit() {
    this.getAll();
    this.initForm();
    this.formFuncionario = this.fb.group({
      id: [0],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      cafe: ['', Validators.required],
      is_active: [1],
    });
    this.getAll();
  }

  get fc() { return this.formFuncionario.controls; }

  initForm() {
    this.formFuncionario = this.fb.group({id: '', nome: ['', Validators.required ], cpf: ['', Validators.required], cafe: ['', Validators.required],})
  }

  save(){
    this.isSubmitted = true;
    if (this.formFuncionario.invalid) {
      return;
    } else{
      let id = this.formFuncionario.controls.id.value;
      if(!id) {
        this.http.post(this.baseURL, this.formFuncionario.value).subscribe(() => {
          alert('Criado com sucesso');
          this.reset();
        });
        this.getAll();
      } else {
        this.http.put(this.baseURL+'/'+id, this.formFuncionario.value).subscribe(() => {
          alert('Atualizado com sucesso');
          this.reset;
        });
        this.getAll();
      }
    }
  }

  reset() {
    this.formFuncionario.reset();
    this.formFuncionario.controls.is_active.setValue(1);
    this.isSubmitted = false;

    this.getAll();
  }

  getAll() {
    this.http.get(this.baseURL).subscribe((result: any) => {
      this.funcionarioList = result;
    })
  }

  edit(id: any){
    if(id){
      const funcionario = this.funcionarioList.find((x: { id: any; }) => x.id === id);
      if(!funcionario) return;
      funcionario.isReading = true;

      this.http.get(this.baseURL+'/'+id).subscribe((result: any) => {
        Object.keys(this.formFuncionario.controls).forEach(key => {
          this.formFuncionario.controls[key].setValue(result[key]);
        });
        funcionario.isReading = false;
      });
    }
  }

  cleanForm() {
    this.formFuncionario.reset();
  }

  delete(id: any){
    var result = confirm('Quer deletar?');
    if (id && result){
      const funcionario = this.funcionarioList.find((x: { id: any; }) => x.id === id);
      if (!funcionario) return;
      funcionario.isDeleting = true;

      this.http.delete(this.baseURL+'/'+id).subscribe(() => {
        funcionario.isReading = false;
        this.reset
        alert('Removido com sucesso');
      });
      this.getAll();
    }
  }

}
