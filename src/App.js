import React from 'react';
import { Col, Card, CardText, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import './App.css';
library.add(faChevronDown);



/*
<a id="">
  <Card>
    <CardBody>
      <CardText>

      </CardText>
      <div className="center-align">
        <a href={"#"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
      </div>
    </CardBody>
  </Card>
</a>
*/

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
            <li><a href="#gbd">The Global Burden of Disease</a></li>
            <li><a href="#activities">So Much Room for Activities</a></li>
            <li><a href="#fitness">A Hot Boy Future</a></li>
            <li><a href="#epilogue">Epilogue</a></li>
          </ul>
        </div>

      </div>

      <hr></hr>

      <div className="content-wrapper">
        <div className="gbd">
          <a id="gbd"><h2>The Global Burden of Disease</h2></a>
          <Col>
            <a id="c1">
              <Card>
                <CardBody>
                  <CardText>
                    As many of you know or remember from the last edition of “What’s on Kyle’s mind”, since January I have been on the hunt for a
                    post-graduation job that does something tech related for an organization whose sole purpose is to positively contribute to human
                    existence. In the meantime, I have found one such job at the Institute for Health Metrics and Evaluation (IHME) as a data analyst
                    / research consultant.
                </CardText>
                  <div className="center-align">
                    <a href={"#c2"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                  </div>
                </CardBody>
              </Card>
            </a>
            <a id="c2">
              <Card>
                <CardBody>
                  <CardText>
                    In my role I work on a team called Surge that functions a lot like special ops. The mission is always to join a team, 
                    learn the information that is necessary for exactly what I’m doing, execute, and switch teams - usually all in the span 
                    of 3 weeks.  
                  </CardText>
                  <div className="center-align">
                    <a href={"#"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                  </div>
                </CardBody>
              </Card>
            </a>
          </Col>


        </div>
        <hr></hr>
        <div className="activities">
          <h2><a id="activities">So Much Room for Activities</a></h2>
          <Col>
            <Card>
              <CardBody>
                <CardText>
                  In my opinion, the city of Seattle has the best public parks of any city on the West Coast.  They’re well kept, completely free,
                  and incredibly Instagram worthy.  I’ve spent the last four years learning about and exploring as many as I feasibly could, and there
                  has always been one that stands out as a clear favorite of mine.  Greenlake.
                </CardText>
                <div className="center-align">
                    <a href={"#"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                  </div>
              </CardBody>
            </Card>
          </Col>
        </div>
        <hr></hr>
        <div className="fitness">
          <h2><a id="fitness">A Hot Boy Future</a></h2>
          <Col>
            <Card>
              <CardBody>
                <CardText>
                  In my last story of the day, I’m gonna flex a little if that’s alright.  And in this case I mean it literally.
                </CardText>
                <div className="center-align">
                    <a href={"#"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                  </div>
              </CardBody>
            </Card>
          </Col>
        </div>
        <hr></hr>
        <div className="epilogue">
          <h2><a id="epilogue">Epilogue</a></h2>
          <Col>
            <Card>
              <CardBody>
                <CardText>
                  Fitness.  Intellectual; mental; physical.  A job that pushes my intellectual capacity, a location that promotes my mental well being,
                  and hobbies that keep me agile so I can continue to pursue the others.  I’m not sure that at any other time in my life I would have
                  called myself healthy, but here we are.  Dare I say thriving.
                </CardText>
                <div className="center-align">
                    <a href={"#"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
                  </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardText>
                  I want to take just one more minute of your time to say thank you for listening to my stories.
                  I have a lot of fun writing, designing, and building these websites, and it means a lot that you stopped by to hang out.
                  Catch you later.
                </CardText>
              </CardBody>
            </Card>
          </Col>
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
