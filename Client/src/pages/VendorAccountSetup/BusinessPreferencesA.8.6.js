import React, {useState} from "react";
import ProgressBar from "./progressBar";

const BusinessPreferences = ()=>{
    const [language, setLanguage] = useState('English');
    const [country, setCountry] = useState('Canada');
    const [state, setState] = useState('Ontario');
    const [currency, setCurrency] = useState('$Canadian Dollars');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submitted");
      //write navigate to next page
    };
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
      };
    const handleCountry = (event) => {
        setCountry(event.target.value);
    };
    const handleStateeChange = (event) => {
        setState(event.target.value);
    };
    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <>
            <ProgressBar/>
            <hr />
            <h1 className="progress-page-title">Business Preference</h1>
            <p className="small-description">Tell us about your shop.</p>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Business Language</label>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                    <label>Business Country</label>
                    <select value={country} onChange={handleCountry}>
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                    </select>
                    <label>Business State/Province</label>
                        <select value={state} onChange={handleStateeChange}>
                            <option value="">Select a state/province</option>
                            <optgroup label="Canadian Provinces">
                                <option value="Alberta">Alberta</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                                <option value="Northwest Territories">Northwest Territories</option>
                                <option value="Nunavut">Nunavut</option>
                                <option value="Yukon">Yukon</option>
                            </optgroup>
                            <optgroup label="US States">
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </optgroup>
                        </select>
                    <label>Business Currency</label>
                    <select value={currency} onChange={handleCurrencyChange}>
                        <option value="$Canadian Dollars">$Canadian Dollars</option>
                        <option value="$US Dollars">$US Dollars</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default BusinessPreferences