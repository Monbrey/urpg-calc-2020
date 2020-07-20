import { ThemeProvider } from "@material-ui/core";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";
import NewBattle from "../NewBattle/NewBattle";
import { theme } from "../util/theme";
import Calc from "../Calc/Calc";

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/new" component={NewBattle} />
                        <Route path="/calc" component={Calc} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    )
};

export default App;
