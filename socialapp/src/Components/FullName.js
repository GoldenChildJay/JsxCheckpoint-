
import React from "react";

function Fullname () {

    let person = {
        lastName: "Chukwueke",
        firstName: "Johnson"
    }

    return(
        <div>
            <h1>{person.lastName + " " + person.firstName} </h1>
        </div>
    )
};


export default Fullname   // export the FullName module