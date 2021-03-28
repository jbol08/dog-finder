import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from './DogList';
import Dog from './dog';

function Routes({ dogs }) {
   

        return (
            <div>
                <Switch>
                    <Route exact path="/dogs"><DogList dogs={dogs}/> </Route>
                    <Route exact path="/dogs/:name" > <Dog dogs={dogs}/> </Route>
                    <Redirect to="/dogs" />
                </Switch>

            </div>
        );
    }


export default Routes;