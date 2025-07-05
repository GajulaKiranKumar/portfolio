import React from 'react';
import '../style/About.css';


function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <ul className="personal-info">
        <li><strong>Name:</strong> G Kiran Kumar</li>
        <li><strong>Email:</strong> gajulakiran174@gmail.com</li>
        <li><strong>Phone:</strong> +91 8688992860</li>
        <li><strong>City:</strong> Mantralayam</li>
        <li><strong>Country:</strong> India</li>
      </ul>
      <div className="bio">
        <h2>My Background</h2>
        <p>
          I am a B.Tech graduate in Computer Science from Annamacharya Institute of Technology and Science, Tirupati,
          affiliated with Jawaharlal Nehru Technological University Anantapur. I completed my intermediate in the MPC group
          at Narayana Junior College, Kurnool, and my SSC at Z.P. High School, Mantralayam.
        </p>
        <p>
          I have hands-on experience with modern web technologies including JavaScript, React, Node.js, Express, and MongoDB.
        </p>
      </div>
      <div>
        Education
      </div>
      <div>
        <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScg_51k24MDCsdhb-zYb6GHiircciBoiBdrqa6WVnm1jidhih9ZEgQ4QRkxtp04MzyfIw&usqp=CAU" alt="" />
            <h1>Annamacharya Institute and technology and  sicence </h1>
            <p>Bachelor of technology</p>
            <p>computer scicence and engineering</p>
            <p>Kurnool-india</p>
            <p>2020-2024</p>
        </div>
      </div>
      <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwPQysjLu1MTEWscVZIJGMIUOOj1sMv8vUAtRzxFSIZcv8XXkDrX_jqp3X5NVswjalrc&usqp=CAU" alt="" />
            <h1>Narayana junior college </h1>
        
            <p>Intermediate</p>
            <p>Kurnool-india</p>
            <p>2018-2020</p>
        </div>
        <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwPQysjLu1MTEWscVZIJGMIUOOj1sMv8vUAtRzxFSIZcv8XXkDrX_jqp3X5NVswjalrc&usqp=CAU" alt="" />
            <h1>Z.p high school </h1>
        
            <p>Scc</p>
            <p>Mantralayam-india</p>
            <p>2017-2018</p>
        </div>
      
    </div>
  );
}

export default About;
