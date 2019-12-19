import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path:"home",component:HomeComponent},
  {
      path:'create',
      component:CreateComponent
  },
  {
      path:'update',
      component:UpdateComponent
  },
  {
      path:'fetch',
      component:FetchComponent
  },
  {
      path:'delete',
      component:DeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
