
import "./index.css"
import Header from './COMPONENTS/header'
import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import Body from "./COMPONENTS/Body"
import Login from "./COMPONENTS/Login"
import Profile from "./COMPONENTS/Profile"
import { Provider } from "react-redux"
import appstore from "./Utils/appstore"
import Feed from "./COMPONENTS/Feed"
import Error from "./COMPONENTS/Error"
function App() {
  

  return (
    <>
      <Provider store={appstore}>
    <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element ={<div><Body></Body></div>}>
            <Route path="/" element = {<Feed/>}></Route>
            <Route path="/login" element ={<div><Login/></div>}></Route>
            <Route path="/profile" element ={<div><Profile/></div>}></Route>
            <Route path="/error" element = {<div><Error/></div>}></Route>
          </Route>

        </Routes>

    </BrowserRouter>
    </Provider>
   
    </>
  
    
  )
}

export default App
