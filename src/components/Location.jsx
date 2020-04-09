import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

const WrapperContainer = styled.h2`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Location = () => {
  return (
    <WrapperContainer>
      <div>
        <h2>{'Location'}</h2>
        <img style={{ height: '15em', width: '15em' }} src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/2/3/1/2310c9171a_50157784_pia23441.jpg" />
      </div>
    </WrapperContainer>
  )
}

export default withRouter(Location)
