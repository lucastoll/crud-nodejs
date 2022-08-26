import React from 'react'
import styled from 'styled-components'

import c from "../../../public/styles/colors.json";

const Wrapper = styled.div`
    background: ${c.lightBrown};
    width: 100%;
    min-height: 100vh;
    padding: 40px 30px;
    height: fit-content;
`

export default function FramePiadas() {
  return (
    <Wrapper></Wrapper>
  )
}
