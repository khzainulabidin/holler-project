import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default App;
