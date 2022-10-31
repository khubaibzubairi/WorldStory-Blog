import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './pages/admin/add-posts/add-posts.component';
import { AddUsersComponent } from './pages/admin/add-users/add-users.component';
import { DashboardComponent } from './pages/admin/dashboard.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { UpdatePostComponent } from './pages/admin/update-post/update-post.component';
import { UsersComponent } from './pages/admin/users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-posts', component: AddPostsComponent },
  { path: 'update-post', component: UpdatePostComponent },
  { path: 'add-users', component: AddUsersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
