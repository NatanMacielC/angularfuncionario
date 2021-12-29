import { ListagemComponent } from './view/listagem/listagem.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './containers/full-layout';
import { SimpleLayoutComponent } from './containers/simple-layout';

const routes: Routes = [
  {
    path: '', component: FullLayoutComponent,  data: { title: 'Cadastro' },
    children: [
      { path: '', component: CadastroComponent }
    ]
  },
  {
    path: 'listagem', component: FullLayoutComponent,  data: { title: 'Listagem' },
    children: [
      { path: '', component: ListagemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
