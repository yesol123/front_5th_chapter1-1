import "./main.js";

import { layout } from "./layout.js";
import { MainPage } from "./pages/MainPage.js";
import { LoginPage, setupLogin } from "./pages/LoginPage.js";
import { ProfilePage, updateProfile } from "./pages/ProfilePage.js";
import { ErrorPage } from "./pages/ErrorPage.js";
import { Logout } from "./component/Header.js";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
  "/404": ErrorPage,
};

export const router = () => {
  let path = window.location.hash.slice(1) || "/";
  console.log("Hash Router:", path);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (path === "/profile" && !user) {
    path = "/login";
    window.location.hash = "#/login";
    return;
  }
  if (path === "/login" && user) {
    path = "/";
    window.location.hash = "#/";
    return;
  }

  const Page = routes[path] || routes["/404"];
  const html = path === "/login" || path === "/404" ? Page() : layout(Page);
  document.getElementById("root").innerHTML = html;

  if (path === "/login") {
    setupLogin();
  }
  if (path !== "/login" && path !== "/404") {
    Logout();
  }
  if (path === "/profile") {
    updateProfile();
  }

  setupNavigation();
};

window.router = router;

const setupNavigation = () => {
  document.querySelectorAll("a").forEach((link) => {
    link.removeEventListener("click", handleLinkClick);
    link.addEventListener("click", handleLinkClick);
  });
};

const handleLinkClick = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#")) {
    window.location.hash = href;
    router();
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  router();
});
