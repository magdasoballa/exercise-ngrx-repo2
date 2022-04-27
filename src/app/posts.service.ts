import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/types/post';
import {
  catchError,
  filter,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  pipe,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const posts = 'https://jsonplaceholder.typicode.com/posts/';
    const data = this.http.get<Post[]>(posts).pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      })
      // catchError(() => of([]))
      // -------------------
      // result.subscribe({
      //   next(response) {
      //     console.log(response);
      //   },
      //   error(err) {
      //     console.error('Error: ' + err);
      //   },
      //   complete() {
      //     console.log('Completed');
      //   },
      // });

      //   }
      // }
    );
    data.subscribe({
      next(x) {
        console.log('data: ', x);
      },
      error() {
        console.log('errors already caught... will not run');
      },
    });
  }
}
