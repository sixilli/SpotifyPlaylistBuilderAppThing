import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router"

import Login from "./pages/login"
import PlaylistBuilder from "./pages/PlaylistBuilder"

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello</h1>
      <Routes>
        <Route path="/" component={Login} />
        <Route path="/builder" component={PlaylistBuilder} />
      </Routes>
    </>
  );
};

export default App;
