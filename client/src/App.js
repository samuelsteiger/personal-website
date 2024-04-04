import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AboutMe from './about_me.js';
import PersonalWebsite from './personal_website.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalWebsite />}>
            <Route index element={<AboutMe />} />
            <Route path="projects" element={<p>Projects Page Placeholder</p>} />
            <Route path="blog" element={<p>Blog Page Placeholder</p>} />
            <Route path="*" element={<p>Sorry, nothing here.</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
