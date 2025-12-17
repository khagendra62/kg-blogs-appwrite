import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthLayout } from "./components";
import {
  HomePage,
  AddPostPage,
  AllPostsPage,
  PostPage,
  EditPostPage,
  SignupPage,
  LoginPage,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPostsPage />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <PostPage />,
      },
    ],
  },
]);
