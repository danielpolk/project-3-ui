import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Grid/Wrapper";
import Container from "./components/Grid/Container";
// import Row from "./components/Layout/Row";
import Item from "./components/Grid/Item";
import Nav from "./components/Nav/Nav";
import DailyCard from "./components/Daily/DailyCard";


class App extends Component {
  render() { 
    return (
      <Wrapper spacing="0">
      <Nav />
        <Container spacing="16">
            <Item xs='12' sm='3'>
              <DailyCard />
            </Item>

            <Item xs='12' sm='3'>
              <DailyCard />
            </Item>
            
            <Item xs='12' sm='3'>
              <DailyCard />
            </Item>
            
            <Item xs='12' sm='3'>
              <DailyCard />
            
            </Item>
            
            <Item xs="12" sm='3'>
              <DailyCard />
            </Item>

        </Container>
      </Wrapper>
    )}
}


export default App;