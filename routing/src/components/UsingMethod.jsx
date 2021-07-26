import React from 'react'
import { Link } from '@reach/router'
const UsingMethod = (props) => {
    return (
        <div>
      {/* isNaN(+"35") is false, isNaN(+"hello") is true */}
     { 
     
        isNaN(props.value) ? <h1>The word is {props.value}</h1> : <h1> Number is {props.value}</h1>
     
     }
        </div>
    )
}

export default UsingMethod
