import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PersonalWebsite from './personal_website.js';
import AboutMe from './about_me.js';
import Blog from './blog.js'
import Projects from "./projects.js";
import ErrorPage from "./error_page.js";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalWebsite />}>
            <Route index element={<AboutMe />} />
            <Route path="projects" element={<Projects/>} />
            <Route path="blog" element={<Blog/>} />
            <Route path="error" element={<ErrorPage/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
