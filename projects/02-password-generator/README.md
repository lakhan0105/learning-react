# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## build this project from chai aur code YouTube channel

## to copy the text to clipboard

navigator.clipboard.writeText(text);

## Toastify

// importing
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast function
const notify = () => toast("copied to clipboard");

// call that func in copyPass which runs on clicking copy btn
const copyPass = (text) => {
navigator.clipboard.writeText(text);
notify();
};

// defined Toastify component in App.jsx
<ToastContainer position="top-center"></ToastContainer>;
