import React from 'react'

const Color = (props) => {
    const {font,back,word}=props;
    return (
        <div>
          <h2 style={{color:font,backgroundColor:back}}>The Word is {word}</h2>  
        </div>
    )
}

export default Color
