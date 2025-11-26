import { Routes } from '@angular/router';
import {BindingsDirectives} from './bindings-directives/bindings-directives';
import {App} from './app';
import {UserManagement} from './user-management/user-management';

export const routes: Routes = [
  {path:'bindings-directives', component: BindingsDirectives},
  {path: '', redirectTo:'bindings-directives', pathMatch: 'full'},
  {path: 'root', component: App},
  {path:'users', component: UserManagement}
];
