import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { KarateComponent } from './karate/karate.component';
import { MemoriaisComponent } from './memoriais/memoriais.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'menu', component: MenuComponent},
  {path:'inicio', component: InicioComponent},
  {path:'karate', component: KarateComponent},
  {path: 'memoriais', component: MemoriaisComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
