import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppBlog from "./AppBlog";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppBlog />
  </StrictMode>
);