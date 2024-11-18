import React from 'react'
import Container from './Container'

const HeadingText = ({text}) => {
  return (
    <div>
      <Container>
        <h2 className="text-primary font-bold font-inter text-4xl py-10 px-3">
          {text}
        </h2>
      </Container>
    </div>
  )
}

export default HeadingText
