import React from 'react';
import { Col, Card, CardText, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import './App.css';



/*
<a id="">
  <Card style={{"padding-bottom":"15%"}}>
    <CardBody>
      <CardText>

      </CardText>
      <div className="center-align">
        <a href={"#"} className="arrow"><FontAwesomeIcon icon="chevron-down" size="2x" /></a>
      </div>
    </CardBody>
  </Card>
</a>

<a id="">
  <Card style={{"padding-top":"5%", "padding-bottom":"15%"}}>
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
        <Fade bottom>
          <div className="header-intro">
            <h1>Promises</h1>
            <p>This has been a summer of making good on promises I’ve made to myself for years. Do you have time for a few short stories?</p>
          </div>
          <div className="table-of-contents">
            <h2>Table of Contents</h2>
            <ul>
              <li><a href="#gbd">The Global Burden of Disease</a></li>
              <li><a href="#activities">So Much Room for Activities</a></li>
              <li><a href="#fitness">Hot Boy Future</a></li>
              <li><a href="#epilogue">Epilogue</a></li>
            </ul>
          </div>
        </Fade>

      </div>

      <Fade right><hr></hr></Fade>

      <div className="content-wrapper">
        <div className="gbd">
          <a id="gbd"><Fade bottom><h2>The Global Burden of Disease</h2></Fade></a>
          <Col>
            <Fade bottom>
              <Card style={{ "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    As many of you know or remember from the last edition of “What’s on Kyle’s mind”, since January I have been on the hunt for a
                    post-graduation job that does something tech related for an organization whose sole purpose is to positively contribute to human
                    existence. Since then, I have found one such job at the Institute for Health Metrics and Evaluation (<a href="http://healthdata.org" target="_blank">IHME</a>) as a data analyst
                      / research consultant.
                </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    In my role I work on a team called Surge that functions a lot like special ops. The mission is always to join a team,
                    learn the information that is necessary for exactly what I’m doing, execute, and then switch teams - usually all within the span
                    of 3 weeks.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    You can imagine that this isn’t the most relaxing first job. The expectation is always perfection, and success is measured by a
                    binary outcome - will <a href="http://thelancet.com" target="_blank">The Lancet</a> accept this paper as one of the 5% of submissions that are published, or will they reject it? Will
                    policymakers all over the world feel confident enough in our results to utilize them, or will they go in one ear and out the other?
                    Real casual work conditions ya know?
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    In the three months I’ve been at IHME, the learning curve has been immense.  After a basic, three-day orientation
                    I was immediately thrown into my first assignment where I entered into a room full of the world's leading Health Economists who
                    expected me to be an expert on a programming language I had never heard of.  On my seventh day on the
                    job I was asked to implement a Spatiotemporal Gaussian Process Regression (ST-GPR) model on a 900,000 row by 56 column data set
                    received directly from the Bill & Melinda Gates Foundation, still in that programming language I was only starting to understand.
                    “Yikes” was my first response to that request.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    The content of my days varies significantly depending on the team I'm with at the time, but most follow a similar structure.
                    I usually spend the morning emailing back and forth with international collaborators while they're still awake in their respective time zones
                    (most recently with the Director of Results & Evaluation from the Norwegian Ministry of Health).  In the early afternoon I will have a series of
                    meetings to discuss improvements on whichever disease modeling algorithm I'm working on.  Mid-afternoon I'll take
                    a break to plank (yes I do mean the core exercise, plank), and before I leave for the day I will send my edited code off to our cloud computing
                    infrastructure to run overnight.  Though they are usually similarly structured, my work days are an all-out sprint for the
                    distance of a half-marathon, so ya boi is learning to enjoy running.
                </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    All of this in mind, the benefits of my job far outweigh the risks.  I get to work alongside wickedly intelligent individuals who
                    care about doing cutting edge science that spearheads the world’s understanding of the global burden of disease.  My colleagues are
                    hyper-nerds with social skills and a purpose.  And I was offered a seat at the table.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    In the weeks since my first day, the work hasn’t even come close to slowing down but my tolerance and efficiency have drastically
                    increased.  The pace of work during undergrad is meager in comparison, but the difference now is that the work is impactful and
                    stays at the office in Belltown.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    For time’s sake this is as much of a story as you get about my new job, and for good reason.  I have two more good stories to share
                    before you go.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
          </Col>


        </div>

        <Fade right><hr></hr></Fade>

        <div className="activities">
          <a id="activities"><Fade bottom><h2>So Much Room for Activities</h2></Fade></a>
          <Col>
            <Fade bottom>
              <Card style={{ "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    In my opinion, the city of Seattle has the best public parks of any city on the West Coast.  They’re well kept, completely free,
                    and incredibly Instagram worthy.  I’ve spent the last four years learning about and exploring as many as I feasibly could, and there
                    has always been one that stands out as a clear favorite of mine.
                </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card>
                <CardBody>
                  <CardText className="middle">
                    <a href="https://www.google.com/maps/place/Green+Lake,+Seattle,+WA/@47.6708043,-122.357081,13.27z/data=!4m5!3m4!1s0x54901414dad562fd:0xc942aafc8f01267c!8m2!3d47.6798344!4d-122.3257819" target="_blank">Greenlake</a>
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    For some context, the lake at the center of the Greenlake neighborhood was carved by a glacier about 50,000 years ago and is now
                    outlined by a 2.8 mile path (4.5km for the metric squad).  The lake is currently an average of 13ft deep and 30ft deep at maximum,
                    but if you had been in Seattle prior to 1911 it would have been an additional 7ft deep and stretched all the way to the edge of
                    Ravenna Park (another Seattle classic).  I count the time I have spent at Greenlake and in the Greenlake neighborhood as some of the
                    most valuable I have spent in Seattle, partially because of the community that Greenlake fosters.  All of the information I now
                    know about Greenlake (including the information above) I learned from a series of conversations with hipster baristas, elderly
                    members of a Tai Chi group, professional speed skaters, and homeless fishermen, all of whom call the Greenlake area their home.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    For a few years now I have also dreamed of calling Greenlake my home, and as of September I do.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    There were a few factors that were really important to me while I was apartment hunting: public transit options, distance to a
                    grocery store, and being in a space that promoted good mental health practices.  The first two factors are easy to assess from an
                    apartment listing, but the third one is tricky to put your finger on, even in person.  At most of the apartments I toured I had to
                    make sacrifices on at least one of those three factors.  Did I want a 15 minute walk to a bus or a 20 minute walk to the closest QFC?
                    Did I want to be close to my friends, or did I want to live somewhere with more than 175 square feet of living space?  There were
                    some buildings where I considered compromising, but in August I stumbled upon one that I didn’t have to compromise on at all.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    At my new apartment, walking, I live 2 minutes from the bus that currently takes me to work, 4 minutes from the bus that will take
                    me to work starting in June, 3 minutes from two of my favorite coffee shops in Seattle (Retreat and Revolutions), 5 minutes from a
                    grocery store, and ONE WHOLE MINUTE from Greenlake park.  When I say that I nailed it with this one, I f***ing mean it.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    What’s the space like, you ask?  Let me tell you.  The unit is a top-floor, one bedroom / one bathroom, 700 sq.ft. apartment (so
                    much room for activities!!) with a great kitchen in an adorable mid-century building.  And the absolute best part?  I can still
                    afford it working my non-tech industry, global health, research job.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    In classic Kyle fashion I am going for a minimalist aesthetic throughout the unit.  A table and chairs, two couches that face each
                    other, art prints from some of my favorite Seattle and Austin-based artists and designers, and some room for a yoga mat and bike
                    stand.  I refuse to bring a TV into the apartment, so everything is thoughtfully configured to invite conversation.  And of course
                    my signature twinkle lights tracing the corners of the ceiling.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    Though this section of my story is coming to a close for now, the adventures I’ll have in Greenlake are far from over.  Now living
                    so close you can find me around the lake most hours I’m not in the office, rain or shine.  Maybe I’ll see you around.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </div>

        <Fade right><hr></hr></Fade>

        <div className="fitness">
          <a id="fitness"><Fade bottom><h2>Hot Boy Future</h2></Fade></a>
          <Col>
            <Fade bottom>
              <Card style={{ "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    In my last story of the day, I’m gonna flex a little if that’s alright.  And in this case I mean it literally.
                </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    As many of you will remember I was not always the lanky beanstalk my new coworkers know me as.  For a while there I was endearingly
                    known as Baymax (the inflated, white robot from Big Hero 6) but more recently have been recognized as Edward Cullen from Twilight - though I argue
                    that I am slightly less pale than sparkle boy.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    Shortly before exiting the University of Washington I bought a comically small, super cheap, entirely red, single-speed bicycle
                    from a friend in hopes that I could explore a new hobby.  Something I was (and am) worried about post-graduation is
                    figuring out what makes me happy outside the workplace, so I thought I would give cycling a shot.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    Journal excerpt from bikin’ day one, May 2019:
                    <p className="journal-text">“I made it to Gas Works Park and back (about 2.5 miles total) in 10 minutes.
                    I haven’t ridden a bike in 10 years, but it was almost pleasant.  I need a new seat though.  My ass was on fire the entire time.
                    More to come soon.”</p>
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    Journal excerpt from bikin’ day six:
                    <p className="journal-text">“I decided to ride West on the Burke Gillman for as long as it took to listen to Khalid’s
                    Suncity album.  I made it to Ballard where the trail turns into an industrial complex, but wanted to keep going.  I ended up at
                    Golden Gardens, an extra 2 miles away.  My legs are tired and riding up hills on a single speed is tough.  The scenery is nice
                    though.”</p>
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    Journal excerpt from bikin’ day twenty two:
                    <p className="journal-text">“Made it to-and-from Kenmore (22.5 miles total) in two hours today.  Been feeling
                    strong recently.  Is this what people call exercise?”</p>
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    A lot has happened since I bought that red bike.  In the first month I went from riding 5 miles in a day to riding 20 plus everyday.
                    I crashed the red bike going over some train tracks and busted up my right side - shoulder to knee - just before my interview at IHME.
                    I fixed the bike two days later and within a week of the crash did the 28.6 miles around the North half of Lake
                    Washington.  I am now well on my way to my first 100 mile ride, and am planning to do Seattle-to-Portland when it comes around next
                    July.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    You may be thinking, “Kyle.  It sounds like you’re only doing leg day.”  And while you’re not entirely wrong, I've made sure to keep
                    my core and arms strong too.  Like I mentioned, I’m back on that plank grind (recently up to 5 & 1/2 minutes), I climb at a few gyms in Seattle, and
                    a couple months ago was able to do pull-ups for the first time since the second grade.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom>
              <Card style={{ "padding-top": "5%", "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    Having been a skinny boi for a year it was probably time to gain back a little weight - though I was hesitant initially.  I'm learning that
                    loose skin hanging in unflattering places may always be a part of my life, but recently I've been happy to fill some of that space with lean muscle.
                    With summer now coming to a close, it's time to start working towards a hot boy future.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </div>

        <Fade right><hr></hr></Fade>

        <div className="epilogue">
          <a id="epilogue"><Fade bottom><h2>Epilogue</h2></Fade></a>
          <Col>
            <Fade bottom>
              <Card>
                <CardBody>
                  <CardText>
                    A promise kept is an investment returned.  For years I have worked unwaveringly to uphold the promises I made
                    long ago, a few of which came to fruition this summer.  There are many more still accruing interest and I'm in no
                    rush to divest.  I have always been playing the long game.  This is just the beginning.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom><p className="ellipses">• • •</p></Fade>
            <Fade bottom>
              <Card >
                <CardBody>
                  <CardText>
                    Fitness.  Intellectual; mental; physical.  A job that stretches my intellectual capacity, a location that promotes my mental well being,
                    and hobbies that keep me agile so I can continue to pursue the others.  I’m not sure that at any other time in my life I would have
                    called myself healthy, but here we are.  Living well.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade bottom><p className="ellipses">• • •</p></Fade>
            <Fade bottom>
              <Card style={{ "padding-bottom": "5%" }}>
                <CardBody>
                  <CardText>
                    I want to take just one more minute of your time to say thank you for listening to my stories.
                    I have a lot of fun writing, designing, and building these websites, and it means a lot that you stopped by to hang out.
                    Catch you later,
                </CardText>
                  <br></br>
                  <CardText className="middle">- Kyle -</CardText>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </div>
        <div>
          <Fade right>
          <footer>
            © 2019 Copyright&nbsp;
            <a href="https://www.linkedin.com/in/kyle-e-simpson/" target="_blank">Kyle Simpson</a> &nbsp;&nbsp;
            <a className="right" target="_blank" href="http://twitter.com/kyle_e_simpson">@kyle_e_simpson</a>
          </footer>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default App;
