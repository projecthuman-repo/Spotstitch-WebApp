import React,{useState} from "react";

function BusinessName(){
    //back button
    //save and continue
    const [businessName, setBusinessName] = useState("")
    const handleSetBusinessName =(event)=>setBusinessName(event.target.value);
    
    return(
    <>
        <h1 className="progress-page-title">Name Your Business</h1>
        <p className="small-description">No rush! You may use draft names for now and changes it later.</p>
        <div className="form-container">
            <input placeholder="Enter your business name" onChange={handleSetBusinessName}></input>
            <ul>
                <li>Between 4-20 characters</li>
                <li>No special characters, or accented letters</li>
            </ul>
        </div>

        <button className="back-button">Back</button>
        <button className="save&continue">Save&Continue</button>
    </>)
}

export default BusinessName