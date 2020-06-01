import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostManagementRoutingModule } from './post-management-routing.module';
import { PostManagement } from './post-management.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [PostManagement, PostsComponent, NewPostComponent],
  imports: [
    CommonModule,
    PostManagementRoutingModule
  ]
})
export class PostManagementModule { }
