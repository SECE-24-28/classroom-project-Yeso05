import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Content from './Content' 
  //basic syntax of react component
  function App() {

    let frnds=["Anil","Sunil","Kiran","Sohan"];

    return(
      <>
      <Header title={"Friends List"}
               city={"Chennai"}

      />
      {
        (frnds.length)?
        <Content frnds={frnds}/>
        :
        (<p>No friends found</p>)
      }

   </>
   )
}


export default App