import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import './index.css';
function App() {
  const products=[
    {
        title: "hello",
        body: "halleluja", 
    },
    {
        title: "hello",
        body: "halleluja", 
    },
    {
        title: "hello",
        body: "halleluja", 
    },
] 
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home"element={<Home/>}/>
        <Route path="/contact"element={<Contact/>}/>
        {products.map(products => (
        <Route path="/projects"element={<Projects 
          title= {products.title}
          body= {products.body}
           />}/>))}
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
