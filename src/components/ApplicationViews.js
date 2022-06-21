import React from "react"
import { Route } from "react-router-dom"
import { CampsitesList } from "./campsites/campsites"
import { CreateCampsite } from "./createCampsite/createCampsite"
import { UserCampList } from "./userCampsList/userCampsList"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/">
            <CampsitesList />
        </Route>
        <Route path="/createCampsite">
            <CreateCampsite />
        </Route>
        <Route path="/userCampList">
            <UserCampList />
        </Route>
        

    </>
}
