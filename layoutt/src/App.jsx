import React from "react";
import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
 function App() {
  return (
<React.Fragment>
    <div >
      <header>
      <HeaderNav/>
      </header> 
    </div>

<div>
  <main>
    <Main/>
  </main>

</div>


    <div>
    <footer>
        <Footer/>
      </footer>
    </div>
  
  

</React.Fragment>
  )

  
}

export default App;
