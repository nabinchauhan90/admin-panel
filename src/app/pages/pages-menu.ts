import { NbMenuItem } from "@nebular/theme";
import { Title } from "@angular/platform-browser";
import { PostsComponent } from "./post-management/posts/posts.component";

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  {
    title: "FEATURES",
    group: true,
  },
  {
    title: "User Management",
    icon: "person-outline",
    home: true,
    children: [
      {
        title: "Users",
        link: "/pages/user-manage/users",
        
      },
    ],
  },
  {
    title: "Service Management",
    icon: "keypad-outline",
    children: [
      {
        title: "Services",
        link: "/pages/service-manage/services",
      },
      {
        title: "New Service",
        link: "/pages/service-manage/new-service",
      },
    ],
  },
  {
    title: "Post Management",
    icon: "browser-outline",
    children: [
      {
        title: "Posts",
        link: "/pages/post-manage/posts",
      },
      {
        title: "New Post",
        link: "/pages/post-manage/new-post",
      },
    ],
  },
  {
    title: "Miscellaneous",
    icon: "shuffle-2-outline",
    children: [
      {
        title: "404",
        link: "/pages/miscellaneous/404",
      },
    ],
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login",
      },
      {
        title: "Register",
        link: "/auth/register",
      },
      {
        title: "Request Password",
        link: "/auth/request-password",
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password",
      },
    ],
  },
];
