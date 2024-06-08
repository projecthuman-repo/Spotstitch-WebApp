import React from "react";
import "./CategorySelection.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import { Link } from "react-router-dom";

    const CategorySelection = () => {
        const [buttonClickedIndices, setButtonClickedIndices] = useState([]);

        const handleButtonClick = (index) => {
          if (buttonClickedIndices.includes(index)) {
            setButtonClickedIndices(
              buttonClickedIndices.filter((clickedIndex) => clickedIndex !== index)
            );
          } else {
            setButtonClickedIndices([...buttonClickedIndices, index]);
          }
        };


        const [query, setQuery] = useState('');

        const handleInputChange = (event) => {
          setQuery(event.target.value);
          onSearch(event.target.value);
        };
    

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="welcometitle1">Let's get you stitched in!</div>
            <br/><br/><br/>
            <div className="smalldescription1">Find your seam. What brings you to Spotstitch?</div>
            <br/>
            <div className="smalldescription1">Select 3 or more.</div>
            <br/>

            
            <input
                    
                    type="text"
                    className="searchbox"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="   Search"
            />




            <div className="categoryselection">
            <button
              className={`categorybutton ${
                buttonClickedIndices.includes(0)
                  ? "categorybutton-clicked"
                  : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Category
            </button>
            <button
              className={`categorybutton ${
                buttonClickedIndices.includes(1)
                  ? "categorybutton-clicked"
                  : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Category
            </button>
            <button
              className={`categorybutton ${
                buttonClickedIndices.includes(2)
                  ? "categorybutton-clicked"
                  : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Category
            </button>
            <button
              className={`categorybutton ${
                buttonClickedIndices.includes(3)
                  ? "categorybutton-clicked"
                  : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Category
            </button>
            <button
              className={`categorybutton ${
                buttonClickedIndices.includes(4)
                  ? "categorybutton-clicked"
                  : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              Category
            </button>
            <button
              className={`categorybutton ${
                buttonClickedIndices.includes(5)
                  ? "categorybutton-clicked"
                  : ""
              }`}
              onClick={() => handleButtonClick(5)}
            >
              Category
            </button>
          </div>


            


          
     
            
            <div className="space1"/>
            <div className="skipnextbox">
                <Link to='/findlayer' className="linkskipbutton"><button className="skipbutton">Skip</button></Link>

                <Link to='/findlayer' className="linknextbutton"><button className="nextbutton">Next</button></Link>

            </div>
            <div className="botspace"></div>
            
            
        </div>

        </div>
        </>
    )
}

export default CategorySelection