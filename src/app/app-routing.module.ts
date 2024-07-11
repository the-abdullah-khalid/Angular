// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'users', component: UsersComponent, children:
      [
        { path: ':id/:name', component: UserComponent }
      ]
  },

  {
    path: 'servers',canActivateChild: [AuthGuard], component: ServersComponent, children:
      [
        { path: ':id', component: ServerComponent },
        { path: ':id/edit', component: EditServerComponent,canDeactivate: [canDeactivateGuard] }
      ]
  },

  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
