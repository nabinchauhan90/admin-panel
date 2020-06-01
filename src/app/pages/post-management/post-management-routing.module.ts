import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostManagement } from "./post-management.component";
import { PostsComponent } from "./posts/posts.component";
import { NewPostComponent } from "./new-post/new-post.component";

const routes: Routes = [
  {
    path: "",
    component: PostManagement,
    children: [
      { path: "posts", component: PostsComponent },
      { path: "new-post", component: NewPostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostManagementRoutingModule {}
