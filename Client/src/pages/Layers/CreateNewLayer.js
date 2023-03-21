import React, { useState } from 'react';
import './CreateNewLayer.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-BJ8SvPFuV7SGnYg2FVZaPhMca4xVpLIOdfoNIlWpG8J1jrX6/VsU6PeUiUWwC8/+vuhJm1e+LVDzTJoP/tGgmA=="
      crossOrigin="anonymous" referrerPolicy="no-referrer"/>


function PopupDialog() {
    const [layerName, setLayerName] = useState('');
    const [visibility, setVisibility] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [rules, setRules] = useState('');
    const [showPopupPage1, setShowPopupPage1] = useState(false);
    const [address, setAddress] = useState('');
    const [showPopupPage2, setShowPopupPage2] = useState(false);
    const [formData, setFormData] = useState(null);
    const [layerInfo, setLayerInfo] = useState({});
    const [showPopupPage3, setShowPopupPage3] = useState(false);
    const [showPopupPage4, setShowPopupPage4] = useState(false);





    const handleLayerNameChange = (event) => {
        setLayerName(event.target.value);
    }

    const handleVisibilityChange = (event) => {
        setVisibility(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleRulesChange = (event) => {
        setRules(event.target.value);
    }

    const handleSubmitPopupPage1 = (event) => {
        event.preventDefault();
        setLayerInfo({ layerName, visibility, category, description, rules });
        setShowPopupPage1(false);
        setShowPopupPage2(true);
        setShowPopupPage3(false);
        setShowPopupPage4(false);
    };



    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleSubmitPopupPage2 = (event) => {
        event.preventDefault();
        setShowPopupPage1(false);
        setShowPopupPage2(false);
        setShowPopupPage3(true);
        setShowPopupPage4(false);
    };



    const handlePopupClose = () => {
        setShowPopupPage1(false);
        setShowPopupPage2(false);
        setShowPopupPage3(false);
        setShowPopupPage4(false);
    };

    const handleSubmitPopupPage3 = (event) => {
        event.preventDefault();
        setShowPopupPage1(false);
        setShowPopupPage2(false);
        setShowPopupPage3(false);
        setShowPopupPage4(true);
    };

    const handleSubmitPopupPage4 = (event) => {
        event.preventDefault();
        setShowPopupPage1(false);
        setShowPopupPage2(false);
        setShowPopupPage3(false);
        setShowPopupPage4(false);
    };



    return (
        <div>

            <button className={"createLayer-button"} onClick={() => setShowPopupPage1(true)}>Create New Layer</button>


            {showPopupPage1 && (
                <div className="popup-container">
                    <div className="popup-dialog">
                        <button className="popup-close" onClick={handlePopupClose}>X</button>
                        <form onSubmit={handleSubmitPopupPage1}>
                            <label>
                                Layer Name:
                                <input type="text" value={layerName} onChange={handleLayerNameChange} />
                            </label>
                            <br />
                            <label>
                                Set visibility:
                                <select value={visibility} onChange={handleVisibilityChange}>
                                    <option value="">--Select visibility--</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Choose a category:
                                <select value={category} onChange={handleCategoryChange}>
                                    <option value="">--Select category--</option>
                                    <option value="Placeholder1">Placeholder1</option>
                                    <option value="Placeholder2">Placeholder2</option>
                                    <option value="Placeholder3">Placeholder3</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Add description:
                                <input type="text" value={description} onChange={handleDescriptionChange} />
                            </label>
                            <br />
                            <label>
                                Set Rules:
                                <input type="text" value={rules} onChange={handleRulesChange} />
                            </label>
                            <br />
                            <button type="submit">Next</button>
                        </form>
                    </div>
                </div>
            )}
            {showPopupPage2 && (
                <div className="popup-container">
                    <div className="popup-dialog">
                        <button className="popup-close" onClick={handlePopupClose}>X</button>
                        <form onSubmit={handleSubmitPopupPage2}>
                        <div className="profile-container">
                            <div className="profile-header">
                                <div className="profile-picture-container">
                                    <img className="profile-picture" src="https://picsum.photos/id/237/200/200" alt="Profile Picture" />
                                    <button className="profile-picture-edit-button"><i className="fas fa-edit"></i></button>
                                </div>
                                <div className="banner-container">
                                    <img className="banner-image" src="https://picsum.photos/id/237/1200/300" alt="Banner" />
                                    <button className="banner-edit-button"><i className="fas fa-edit"></i></button>
                                </div>
                            </div>
                            <div className="profile-body">
                                <p>{description}</p>
                            </div>
                            <button type="submit">Next</button>
                        </div>
                        </form>
                    </div>
                </div>
            )}
            {showPopupPage3 && (
                <div className="popup-container">
                    <div className="popup-dialog">
                        <button className="popup-close" onClick={handlePopupClose}>X</button>
                        <form onSubmit={handleSubmitPopupPage3}>
                            <h2>Review:</h2>
                            <p>Name: {layerName}</p>
                            <p>Visibility: {visibility}</p>
                            <p>Category: {category}</p>
                            <p>Description: {description}</p>
                            <p>Rules: {rules}</p>
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            )}
            {showPopupPage4 && (
                <div className="popup-container">
                    <div className="popup-dialog">
                        <button className="popup-close" onClick={handlePopupClose}>X</button>
                        <form onSubmit={handleSubmitPopupPage4}>
                            <h2>New Layer Created!</h2>
                            <p>You're all set up! New layer will be available on your home page.</p>
                            <p>Explore and find your stitch.</p>
                            <button type="submit">Done</button>
                        </form>
                    </div>
                </div>
            )}





        </div>
    );
}

export default PopupDialog;
