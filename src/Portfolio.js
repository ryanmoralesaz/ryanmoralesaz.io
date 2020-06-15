//imporot modules and dependencies
import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  CardImg,
  Card
} from "reactstrap";

//import info pages
import TicTacToe from "./info/TicTacToe";
import QuoteAppInfo from "./info/QuoteAppInfo";
import PageFilter from "./info/PageFilter";
import EmployeeDirectory from "./info/EmployeeDirectory";
import InteractiveForm from "./info/InteractiveForm";
import TwitterApi from "./info/TwitterApi";
import SonicGame from "./info/SonicGame";
import PaintCanvas from "./info/PaintCanvas";
import YoshiTest from "./info/YoshiTest";
import CandaceTeroids from "./info/CandaceTeroids";
//import gifs
import quoteAppPng from "./gifs/quote-generator-lg.gif";
import pageFilter from "./gifs/list-filter.gif";
import employeeDirectoryImg from "./gifs/employee-directory.gif";
import interactiveFormImg from "./gifs/interactive-form.gif";
import twitterAPI from "./gifs/tweeter.gif";
import ticTacToeImg from "./gifs/tictactoe.gif";
import heroCalcImg from "./gifs/hero-calc.gif";
import paintCanvasImg from "./gifs/paint-canvas.gif";
import sonicGameImg from "./gifs/sonic.gif";
import candaceteroids from "./gifs/candaceteroids.gif";
import yoshiTest from "./gifs/yoshi-animation.gif";
import gifSearch from "./gifs/gif-search.gif";
// import jpg,png

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <div />
        <Row className="mb-2">
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Quote Generator</h2>
            </Card>
            <CardImg className="h-50" src={quoteAppPng} />
            <Row className="mt-2">
              <Col className="pb-5">
                <QuoteAppInfo />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/quote_generator/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/quote_generator/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Tic Tac Toe</h2>
            </Card>
            <CardImg className="h-50" src={ticTacToeImg} />
            <Row className="mt-2">
              <Col className="pb-5">
                <TicTacToe />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/tic-tac-toe/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/tic-tac-toe/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Pagination Filter</h2>
            </Card>
            <CardImg className="h-50" src={pageFilter} />
            <Row className="mt-2">
              <Col className="pb-5">
                <PageFilter />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/pagination-filter/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/pagination-filter">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Employee Directory</h2>
            </Card>
            <CardImg className="h-50" src={employeeDirectoryImg} />
            <Row className="mt-2">
              <Col className="pb-5">
                <EmployeeDirectory />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/employee-directory/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/employee-directory">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Interactive Form</h2>
            </Card>
            <CardImg className="h-50" src={interactiveFormImg} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <a href="/interactiveform">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              */}
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/interactive-form/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/interactive-form/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Twitter API (SPA)</h2>
            </Card>
            <CardImg className="h-50" src={twitterAPI} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <PageFilter />
              </Col>
*/}
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/twit-api-project">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        /*<Card color="danger" className="mb-5">
          <h2 className="pt-2">Experiments</h2>
        </Card>
        <Row className="mb-2">
          <Col m>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Sonic Game</h2>
            </Card>
            <CardImg className="h-50" src={sonicGameImg} />
            <Row className="mt-2">
              {
              <Col className="pb-5">
                <a href="/sonicgame">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              }
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/sonic-game/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/sonic-game/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Paint Canvas</h2>
            </Card>
            <CardImg className="h-50" src={paintCanvasImg} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <a href="/paintcanvas">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              }
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/paintcanvas">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/paintcanvas/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Gif Search App</h2>
            </Card>
            <CardImg className="h-50" src={gifSearch} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <a href="/gifsearch">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              }
              <Col className="pb-5">
                <a href="https://giphy-project-th.herokuapp.com/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/gif-search">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">CandaceTeroids</h2>
            </Card>
            <CardImg className="h-50" src={candaceteroids} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <a href="/candaceteroids">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              }
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/candace-asteroids/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/candace-asteroids/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Hero Calculator</h2>
            </Card>
            <CardImg className="h-50" src={heroCalcImg} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <a href="/herocalculator">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              }
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/hero-calculator/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/hero-calculator/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Card color="light" style={{ border: 0 }}>
              <h2 className="pt-2">Yoshi Test</h2>
            </Card>
            <CardImg className="h-50" src={yoshiTest} />
            <Row className="mt-2">
              {/*
              <Col className="pb-5">
                <a href="/yoshitest">
                  <Button className="w-100" color="info">
                    Info
                  </Button>
                </a>
              </Col>
              }
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/yoshi-animation/">
                  <Button className="w-100" color="success">
                    Live Demo
                  </Button>
                </a>
              </Col>
              <Col className="pb-5">
                <a href="https://github.com/ryanmoralesaz/yoshi-animation/">
                  <Button className="w-100" color="warning">
                    See Code
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>*/
      </Container>
    );
  }
}

export default Portfolio;
