import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "../Home/Home";
import Test from "../Test/Test";
import FindOne from "../FindOne/FindOne";
import NewOne from "../NewOne/NewOne";

import "../../css/reset.css";

import GlobalStyle from "../Styles/GlobalStyles";

export default function App() {
  return (
    <>
        <GlobalStyle/> 
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/find-one" component={FindOne} exact/>
                <Route path="/new-one" component={NewOne} exact/>
                <Route path="/test" component={Test} exact/>
            </Switch>
        </BrowserRouter>
    </>
  );
}