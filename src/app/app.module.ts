import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostsComponent } from './pages/admin/add-posts/add-posts.component';
import { DashboardComponent } from './pages/admin/dashboard.component';
import { NavigationComponent } from './pages/admin/navigation/navigation.component';
import { HeaderComponent } from './pages/admin/header/header.component';
import { PostsComponent } from './pages/admin/posts/posts.component';
import { NavContentComponent } from './pages/admin/navigation/nav-content/nav-content.component';
import { UpdatePostComponent } from './pages/admin/update-post/update-post.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { AddUsersComponent } from './pages/admin/add-users/add-users.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { LoginComponent } from './pages/admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    DashboardComponent,
    NavigationComponent,
    HeaderComponent,
    PostsComponent,
    NavContentComponent,
    UpdatePostComponent,
    UsersComponent,
    AddUsersComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
