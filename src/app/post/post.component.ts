import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: { id: number | undefined; title?: string | undefined } = {
    id: undefined,
    title: undefined,
  };
  paramSubscription?: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.post = {
      id: this.route.snapshot.params['id'],
    };
    this.paramSubscription = this.route.params.subscribe((params: Params) => {
      this.post.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.paramSubscription?.unsubscribe();
  }
}
