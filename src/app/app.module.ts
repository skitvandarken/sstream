import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './paginas/base/base.component';
import { EntrarComponent } from './paginas/entrar/entrar.component';
import { RegistarComponent } from './paginas/registar/registar.component';
import { RecuperarComponent } from './paginas/recuperar/recuperar.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { PainelComponent } from './paginas/painel/painel.component';
import { GestaoComponent } from './paginas/gestao/gestao.component';
import { ContaComponent } from './paginas/conta/conta.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { TvComponent } from './paginas/tv/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    EntrarComponent,
    RegistarComponent,
    RecuperarComponent,
    DashboardComponent,
    PainelComponent,
    GestaoComponent,
    ContaComponent,
    MenuComponent,
    RodapeComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
