import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, createBrowserRouter, redirect, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Start from "./pages/Start/Start";
import UserSignUp from "./pages/Start/UserSignUpA2";
import AccountSetup from "./pages/Start/AccountSetupA3";
import AccountEmailVerification from "./pages/Start/AccountEmailVerificationA4";
import ProfileImage from "./pages/Start/ProfileImageA5";
import AccountTypeSelection from "./pages/Start/AccountTypeSelectionA6";
import BioInput from "./pages/Start/BioInputA7.1.js";
import ConnectSocial from "./pages/Start/ConnectSocialMediaA7.2";
import CategorySelection from "./pages/Start/CategorySelectionA7.3";
import FindLayer from "./pages/Start/FindLayer";
import VendorAccountSetup from "./pages/VendorAccountSetup/VendorAccountSetupA8.1";
import VendorType from "./pages/VendorAccountSetup/VendorTypeA8.2";
import BusinessMethod from "./pages/VendorAccountSetup/BusinessMethodA8.3";
import VendorGoal from "./pages/VendorAccountSetup/VendorGoalA8.4";
import VendorSetupComplete from "./pages/VendorAccountSetup/VendorSetupCompleteA8.5";
import BusinessPreferences from './pages/VendorAccountSetup/BusinessPreferencesA.8.6.js'
import BusinessName from './pages/VendorAccountSetup/BusinessNameA.8.7.js'
import BusinessCategory from './pages/VendorAccountSetup/BusinessCategoryA.8.8.js'
import BillingInformation from './pages/VendorAccountSetup/BilingInformationA.8.9.js'
import BusinessCustomization from './pages/VendorAccountSetup/BusinessCustomizationA.8.10.js'
import AccountSetupPageOne from './pages/VendorAccountSetup/AccountSetupA.9.1'
import AccountSetupPageTwo from './pages/VendorAccountSetup/AccountSetupA.9.2'
import AccountSetupPageThree from './pages/VendorAccountSetup/AccountSetupA.9.3'
import PopupDialog from "./pages/Layers/CreateNewLayer";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import Wallet from "./pages/Wallet/Wallet";
import Refunds from "./pages/Refunds/Refunds";
import RefundsPolicy from "./pages/RefundsPolicy/RefundsPolicy";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory";

import Menu from "./components/Menu";
import ShopSetup from "./features/ShopSetup";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import BookEvent from "./pages/BookEvent/BookEvent";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

import Settings from "./pages/Settings/Settings";
import Inventory from "./pages/Inventory/Inventory";
import Messages from "./pages/Messages/Messages";

import TermsOfService from "./components/Navigation/TermsOfService";   {/*Newly added*/}
import PrivacyPolicy from "./components/Navigation/PrivacyPolicy";     {/*Newly added*/}

import {
	Market,
	ShoppingCart,
	Checkout,
	CreateListing,
	EditListing,
	ProductDetailPage,
	Preview,
	Listings,
} from "./pages/Market";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage.jsx";
import HomePosts from "./pages/HomePosts/HomePosts.jsx";
import ExplorePage from "./pages/ExplorePage/ExplorePage.jsx";

function App() {
	const user = useSelector((state) => state.user);
	const token = useSelector((state) => state.user.token)
	const [menuOpen, setMenuOpen] = useState(false);

	// ensure access only to authenticated users
	const Auth = ({ children }) => {
		if (!token) {
			return <Navigate to={"/start"} />
		}
		return children;
	};
	// ensure access only to new users who need to register
	const Logged = ({ children }) => {
		if (token) {
			return <Navigate to={"/"} />
		}
		return children;
	}

	return (
		<BrowserRouter>
			{/* Navigation should be automatically added if user is valid, will not show
        nav bar when user needs to login/signup */
		/* current set to true to test nav components, change to user for production */}
			{token && <Navigation />}
			<Routes>
				<Route path="/start"
					element={<Logged><Start /></Logged>} />
				<Route path="/usersignup"
					element={<Logged><UserSignUp /></Logged>} />
				<Route path="/accountsetup"
					element={<Logged><AccountSetup /></Logged>} />
				<Route path="/emailverification"
					element={<Logged><AccountEmailVerification /></Logged>} />
				<Route path="/profileimage"
					element={<Logged><ProfileImage /></Logged>} />
				<Route path="/accounttype"
					element={<Logged><AccountTypeSelection /></Logged>} />
				<Route path="/bioinput"
					element={<Logged><BioInput /></Logged>} />
				<Route path="/connectsocial"
					element={<Logged><ConnectSocial /></Logged>} />
				<Route path="/categoryselection"
					element={<Logged><CategorySelection /></Logged>} />
				<Route path="/findlayer"
					element={<Logged><FindLayer /></Logged>} />
				<Route path="/vendoraccountsetup"
					element={<Logged><VendorAccountSetup /></Logged>} />
				<Route path="/vendortype"
					element={<Logged><VendorType /></Logged>} />
				<Route path="/businessmethod"
					element={<Logged><BusinessMethod /></Logged>} />
				<Route path="/vendorgoal"
					element={<Logged><VendorGoal /></Logged>} />
				<Route path="/vendorsetupcomplete"
					element={<Logged><VendorSetupComplete /></Logged>} />
				<Route path="/BusinessPreferences"
					element={<Logged><BusinessPreferences /></Logged>} />
				<Route path="/BusinessName"
					element={<Logged><BusinessName/></Logged>} />
				<Route path="/BusinessCategory"
					element={<Logged><BusinessCategory/></Logged>} />
				<Route path="/BillingInformation"
					element={<Logged><BillingInformation/></Logged>} />
				<Route path="/BusinessCustomization"
					element={<Logged><BusinessCustomization/></Logged>} />
				<Route path="/AccountSetupPageOne"
					element={<Logged><AccountSetupPageOne/></Logged>} />
				<Route path="/AccountSetupPageTwo"
					element={<Logged><AccountSetupPageTwo/></Logged>} />
				<Route path="/AccountSetupPageThree"
					element={<Logged><AccountSetupPageThree/></Logged>} />
				
				{/* These routes will require the user to be logged in to access */}
				<Route path="/" element={<Auth><Home /></Auth>}>
					<Route path="/" element={<HomePosts />} />
					<Route path="/notifications" element={<NotificationsPage />}
					/>
				</Route>
				<Route path="/events" element={<Auth><Events /></Auth>} />
				<Route path="/events-event" element={<Auth><Event /></Auth>} />
				<Route path="/events-bookevent" element={<Auth><BookEvent /></Auth>} />
				<Route path="/events-createevent" element={<Auth><CreateEvent /></Auth>} />
				<Route path="/market" element={<Auth><Market /></Auth>} />
				<Route path="/market/product" element={<Auth><ProductDetailPage /></Auth>} />
				<Route path="/market/cart" element={<Auth><ShoppingCart /></Auth>} />
				<Route path="/market/cart/checkout" element={<Auth><Checkout /></Auth>} />
				<Route path="/market/mylistings" element={<Auth><Listings /></Auth>} />
				<Route path="/market/mylistings/create" element={<Auth><CreateListing /></Auth>} />
				<Route path="/market/mylistings/edit/:id" element={<Auth><EditListing /></Auth>} />
				<Route path="/market/mylistings/preview" element={<Auth><Preview /></Auth>} />
				<Route path="/messages" element={<Auth><Messages /></Auth>} />
				<Route path="/layer" element={<Auth><PopupDialog /></Auth>} />
				<Route path="/profile" element={<Auth><Profile /></Auth>} />
				<Route path="/profile/:id" element={<Auth><Profile /></Auth>} />
				<Route path="/wallet" element={<Auth><Wallet /></Auth>} />
				<Route path="/refunds" element={<Auth><Refunds /></Auth>} />
				<Route path="/refundspolicy" element={<Auth><RefundsPolicy /></Auth>} />
				<Route path="/transaction" element={<Auth><TransactionHistory /></Auth>} />
				<Route path="/shopsetup" element={<Auth><ShopSetup /></Auth>} />
				<Route path="/settings" element={<Auth><Settings /></Auth>} />
				<Route path="/inventory" element={<Auth><Inventory /></Auth>} />
				<Route path="/explore" element={<Auth><ExplorePage /></Auth>} />
				<Route path="/terms-of-service" element={<TermsOfService />} />  {/*Newly added*/}
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />     {/*Newly added*/}

			</Routes>
		</BrowserRouter>
	);
}

export default App;
