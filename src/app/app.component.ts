import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './store/models/post';
import * as PostActions from './store/actions/post.actions';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message$?: Observable<string>;
  post$: Observable<Post>;
  text: any;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
    this.post$ = this.store.select('post');
    console.log(this.post$.subscribe((data) => data.text));
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  // editText() {
  //   this.store.dispatch(new PostActions.EditText(this.text));
  // }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
