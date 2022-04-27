import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { BorderDirective } from './directives/border.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './store/reducers/simple.reducer';
import { CommonModule } from '@angular/common';
import { postReducer } from './store/reducers/post.reducer';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    component: PostsComponent,
    children: [{ path: ':id', component: PostComponent }],
  },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BorderDirective,
    UnlessDirective,
    TodosComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ message: simpleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
