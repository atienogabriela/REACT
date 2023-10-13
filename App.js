import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Samples from './samples';
import Contact from './contact';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './header';
// import '/App.css'; 

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
      {/* <Header/> */}
           <Navbar/>
      <div className="content">
            <Home />
        <div className="img">
        <img src={'/images/morning.jpg'} alt='morning' style={{
          height:'50%',
          width:'50%',
          borderRadius:'60%',
          marginTop:'-15%',
          marginLeft:'20%',
          padding:'10%'
         }}/></div>
         <h1><b>GABRIELLA ATIENO</b></h1><br></br>
         <p>An upcoming competent web developer who is specializing in laravel framework and react and who has gained most of her skills through practice and cracking up challenges that I met daily thus equipping me with extraordinary expertise in solving problems related to coding and eager to venture into other upcoming technology. I hold a degree in Computer Science from Kabarak University.
          </p><br></br><br></br>
        <h1>Git Links</h1><br></br><br></br>
        {products.map(product => (
        <Samples
        title= "hello"
        body= "halleluja"
        />
        ))}<br></br><br></br><br></br>
        <h1>Contact Me:</h1><br></br><br></br>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
