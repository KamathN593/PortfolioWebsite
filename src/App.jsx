import { useState } from "react"
import NavBar from "./Components/NavBar/NavBar";
import IconButton from "./Components/IconButton/IconButton";

export const App = () => {
 

  return (
    <div>
      
        <NavBar/>
        <IconButton bg={'darkBlue'} btnText={'Follow me'} textColor={'whiteBG'}/>
    </div>
    
  )
}

export default App;
