import React, { useEffect } from 'react'
import axios from 'axios'

function Getpost() {
  useEffect(()=> {
      axios.post('https://jsonplaceholder.typicode.com/users')
      .then(response => {console.log(response.data);
      
  })
},[])  
 
  return (
    <div>
      
    </div>
  )
}

export default Getpost
