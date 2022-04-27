import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/types/post';
import { LoggingService } from '../logging.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [LoggingService],
})
export class PostsComponent implements OnInit {
  @Input('dupa2') test: string = '';
  @ViewChild('inputref', { static: true }) inputref?: ElementRef;
  // posts$: Observable<Post[]> = this.postService.getPosts();
  constructor(
    private postService: PostsService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    // console.log(this.posts$.subscribe());
    // this.loggingService.logToConsole(this.posts$);
    this.postService.getPosts();
  }

  showRef(arg: string) {
    console.log(arg);
    console.log(this.inputref?.nativeElement.value, 'tuuuu');
  }
}
