

import Context from "./Components/Context";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import "./index.css"
import { TodoProvider } from "./Components/Contexts/TodoContext";


function App() {
  return (
    <TodoProvider>
<section  className="todoapp">
  <Header/>
  <Context/>
   </section>
   <Footer/>
   </TodoProvider>


  );
}

// todoProvider diğerlerine sarmalıyoruz ki o componentlerde kullanabilelim.

export default App;
