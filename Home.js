import React from 'react'
import './index.css';
 const Home = () => {
    return (
        <div className='Content'>
         <div className="img">
        <img src={'/image/flower.jpg'} alt='flower' style={{
          height:'50%',
          width:'50%',
          borderRadius:'60%',
        }}/>
        <div className='Page-content'>
        <h1>GABRIELLA ATIENO</h1>
        <p>An upcoming competent web developer who is specializing in laravel framework and react and who has gained most of her skills through practice and cracking up challenges that I met daily thus equipping me with extraordinary expertise in solving problems related to coding and eager to venture into other upcoming technology. I hold a degree in Computer Science from Kabarak University.
</p>
      </div>
    </div>
    </div>
    );
}
 
export default Home;