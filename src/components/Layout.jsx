import React, { useState } from "react";
import styled from 'styled-components';
import {
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

const colors = {
  user: '#003569',
  book: '#005769',
  location: '#3f0069',
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => colors[props.color]};
  flex:.1;
  color: white;
  font-size: 2em;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex:.8;
`

const WrapperLink = styled(Link)`
  text-decoration: none;
  padding: .5em;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
`

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex:.15;
  background-color: black;
`

const SreenContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  flex:.85;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => colors[props.color]};
  flex:.1;
  color: white;
  font-size: 2em;
`

function App({ children }) {
  const [color, setColor] = useState('user')

  return (
    <Router>
      <Main>
        <Header color={color}>Mon super header</Header>
        <Content>
          <SideBar>
            <WrapperLink onClick={() => setColor('user')} to="/user">Users</WrapperLink>
            <WrapperLink onClick={() => setColor('book')} to="/book">Book</WrapperLink>
            <WrapperLink onClick={() => setColor('location')} to="/location">Location</WrapperLink>
          </SideBar>
          <SreenContent>
            {children}
          </SreenContent>
        </Content>
        <Footer color={color}>Mon super footer</Footer>
      </Main>
    </Router>
  );
}

export default App;
