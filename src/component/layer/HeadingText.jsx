import React from 'react'
import Container from './Container'

const HeadingText = ({text , className}) => {
  return (
    <div>
      <Container>
        <h2 className={`text-primary font-bold font-inter text-4xl py-10 px-3 ${className}`}>
          {text}
        </h2>
      </Container>
    </div>
  )
}

export default HeadingText
