import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { ListagemComponent } from './view/listagem/listagem.component';
import { FuncionarioService } from './view/funcionario/funcionario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { EmptyLayoutComponent } from './containers/empty-layout/empty-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

const APP_CONTAINERS = [
  SimpleLayoutComponent,
  FullLayoutComponent,
  EmptyLayoutComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ListagemComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
  FooterComponent,
],
  providers: [ FuncionarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
