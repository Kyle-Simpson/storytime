import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="header-intro">
          <h1>Promises</h1>
          <p>This has been a summer of making good on promises I’ve made to myself for years. Do you have time for a few short stories?</p>
        </div>
        <div className="table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            <li>The Global Burden of Disease</li>
            <li>So Much Room for Activities</li>
            <li>A Hot Boy Future</li>
            <li style={{"list-style-type":"none"}}>Epilogue</li>
          </ul>
        </div>
        
      </div>

      <hr></hr>

      <div className="content-wrapper">
        <div className="gbd">
          <h2>The Global Burden of Disease</h2>
          <p>
            As many of you know or remember from the last edition of “What’s on Kyle’s mind”, since January I have been on the hunt for a 
            post-graduation job that does something tech related for an organization whose sole purpose is to positively contribute to human 
            existence. In the meantime, I have found one such job at the Institute for Health Metrics and Evaluation (IHME) as a data analyst 
            / research consultant. 
          </p>
        </div>
        <hr></hr>
        <div className="activities">
          <h2>So Much Room for Activities</h2>
          <p>
            In my opinion, the city of Seattle has the best public parks of any city on the West Coast.  They’re well kept, completely free, 
            and incredibly Instagram worthy.  I’ve spent the last four years learning about and exploring as many as I feasibly could, and there 
            has always been one that stands out as a clear favorite of mine.  Greenlake.
          </p>
        </div>
        <hr></hr>
        <div className="fitness">
          <h2>A Hot Boy Future</h2>
          <p>
            In my last story of the day, I’m gonna flex a little if that’s alright.  And in this case I mean it literally.
          </p>
        </div>
        <hr></hr>
        <div className="epilogue">
          <h2>Epilogue</h2>
          <p>
            Fitness.  Intellectual; mental; physical.  A job that pushes my intellectual capacity, a location that promotes my mental well being, 
            and hobbies that keep me agile so I can continue to pursue the others.  I’m not sure that at any other time in my life I would have 
            called myself healthy, but here we are.  Dare I say thriving.
          </p>
          <p>
            I want to take just one more minute of your time to say thank you for listening to my stories.  
            I have a lot of fun writing, designing, and building these websites, and it means a lot that you stopped by to hang out.  
            Catch you later.
          </p>
        </div>
        <div>
          <footer>
            © 2019 Copyright&nbsp;
            <a href="https://www.linkedin.com/in/kyle-e-simpson/" target="_blank">Kyle Simpson</a> &nbsp;&nbsp;
            <a className="right" target="_blank" href="http://twitter.com/kyle_e_simpson">@kyle_e_simpson</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
