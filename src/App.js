import React from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";
import './css/App.css';
import { Container, Col, Row, Card } from 'react-bootstrap';
import Mangadex from './Manga/manga';
import Webtoon from './Webtoon/webtoon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


const mangadexCover = "https://mangadex.org/images/manga/42171.png?1571147970";

class App extends React.Component {

  render() {
    return (
      <HashRouter basename='/'>
        <Container>
          <div className="default"></div>
          <Row className="web-headline mb-3">
            <Col xs={12}>
              <h3><FontAwesomeIcon icon={faBook} /> Webtoon</h3>
              <h3>Collection.</h3>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>

              <Card>
                <Row className="no-gutters">
                  <Col xs={4}>
                    <a target="_blank" href="https://mangadex.org/title/42171">
                      {/**  <div className="img-last-read d-flex justify-content-center" ><img src={webtoonlogo} className="cover center-block" alt="cover" /></div>*/}
                      <div className="img-last-read d-flex justify-content-center" ><img src={mangadexCover} className="cover center-block" alt="cover" /></div>
                    </a>
                  </Col>
                  <Col>
                    <div className="card-block px-2">
                      <p className="card-title p-last-read-Title">Salad Days</p>
                      <p className="card-text p-last-read">last add</p>
                      <p className="card-text p-last-read pb-1">This is the story between a young innocent ballet boy and a passionate, determined boxing boy. </p>

                    </div>
                  </Col>
                </Row>
              </Card>


            </Col>



          </Row>


          <br />

          <Row className="mt-2 ">
            <Col className="d-flex justify-content-between navlink-list">
              <NavLink to="/mangadex" activeClassName="selected" className="a-navi">Mangadex</NavLink>
              <NavLink to="/webtoon" activeClassName="selected" className="a-navi">Webtoon</NavLink>
            </Col>
          </Row>
          <hr />
          <br />

          <Route exact path="/mangadex" component={Mangadex} />
          <Route exact path="/webtoon" component={Webtoon} />

        </Container>
      </HashRouter >


    );
  }
}


export default App;
