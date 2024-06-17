
import holderimg from "../../assets/holderimg.png";
import './AccountSetupA.9.1.css'
import { useNavigate } from "react-router-dom";
function AccountSetupPageOne() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate("/AccountSetupPageTwo");
    };
  return (
    <>
      <div className="main-form-AccountSetupPageOne">
        <div className="main-body-AccountSetupPageOne">
            <div className="left-account-setup">
            <img className="holderimg" src={holderimg} alt="holderimg" />
            </div>
            <div className="right-account-setup">
                <h3 className="account-setup-title">You are all stitched up!</h3>
                <p className="account-setup-text">Lorem ipsum dolor sit amet consectetur. Facilisis sem consectetur pellentesque phasellus accumsan. Rutrum adipiscing sit a sit congue nunc sagittis.</p>
            </div>
        </div>
        <button
            className="save-continue-AccountSetupPageOne"
            onClick={handleSubmit}
          >
            Finish Stup
          </button>
      </div>
    </>
  );
}

export default AccountSetupPageOne;
