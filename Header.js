import React from 'react'

const  Header = (props) => {
    
  return (
    <header>
    <main>
    <h1 >{props.title}</h1> 
    </main>
    </header>
  )
}
Header.defaultProps={
  title:"harini to_do list"
}

export default  Header
