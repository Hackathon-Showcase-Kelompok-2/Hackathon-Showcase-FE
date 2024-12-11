import React from "react";
import Registration from "../event/eventregristration/Registration";
import RegrisBanner from "../event/eventregristration/RegrisBanner";
import RegrisGrid from "../event/eventregristration/RegrisGrid";

function EventRegistration() {
    return(
        <div>
            <RegrisBanner />
            <Registration />
            <RegrisGrid />
        </div>
    )
}

export default EventRegistration;