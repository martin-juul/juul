import { Component, lazy } from 'solid-js';
import { Route, Routes } from 'solid-app-router';

import { Navbar } from './shared/components/navbar/navbar';

const Home = lazy(() => import('./home/home'));
const Projects = lazy(() => import('./projects/projects'));
const Resume = lazy(() => import('./resume/resume'));
const Contact = lazy(() => import('./contact/contact'));

export const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Routes>
    </>
  );
};
