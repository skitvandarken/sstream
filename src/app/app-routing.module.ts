import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './paginas/base/base.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';
import { RegistarComponent } from './paginas/registar/registar.component';
import { ContaComponent } from './paginas/conta/conta.component';
import { PainelComponent } from './paginas/painel/painel.component';
import { GestaoComponent } from './paginas/gestao/gestao.component';
import { RecuperarComponent } from './paginas/recuperar/recuperar.component';
import { TvComponent } from './paginas/tv/tv.component';


const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'registar', component: RegistarComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'painel', component: PainelComponent },
  { path: 'gestao', component: GestaoComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'tv', component: TvComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
