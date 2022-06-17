import React from "react"
import { Route } from "react-router-dom"
import { CampsitesList } from "./campsites/campsites"
import { CreateCampsite } from "./createCampsite/createCampsite"
import { Reviews, ReviewsList } from "./reviews/reviews"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/">
            <CampsitesList />
        </Route>
        <Route path="/createCampsite">
            <CreateCampsite />
        </Route>
        <Route path="/reviews">
            <ReviewsList />
        </Route>
        

    </>
}
