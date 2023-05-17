import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Start from './pages/Start/Start';
import UserSignUp from './pages/Start/UserSignUpA2';
import AccountSetup from './pages/Start/AccountSetupA3';
import AccountEmailVerification from './pages/Start/AccountEmailVerificationA4';
import ProfileImage from './pages/Start/ProfileImageA5';
import AccountTypeSelection from './pages/Start/AccountTypeSelectionA6';
import BioInput from './pages/Start/BioInputA7.1.js';
import ConnectSocial from './pages/Start/ConnectSocialMediaA7.2';
import CategorySelection from './pages/Start/CategorySelectionA7.3';
import FindLayer from './pages/Start/FindLayer';
import VendorAccountSetup from './pages/VendorAccountSetup/VendorAccountSetupA8.1';
import VendorType from './pages/VendorAccountSetup/VendorTypeA8.2';
import BusinessMethod from './pages/VendorAccountSetup/BusinessMethodA8.3';
import VendorGoal from './pages/VendorAccountSetup/VendorGoalA8.4';
import VendorSetupComplete from './pages/VendorAccountSetup/VendorSetupCompleteA8.5';

import PopupDialog from './pages/Layers/CreateNewLayer';

import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Signup/Signup';
import Chat from './pages/Chat';
import Wallet from './pages/Wallet/Wallet';
import Refunds from './pages/Refunds/Refunds';
import RefundsPolicy from './pages/RefundsPolicy/RefundsPolicy';
import TransactionHistory from './pages/TransactionHistory/TransactionHistory';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AppContext, socket } from './context/appContext';
import Menu from './components/Menu';
import ShopSetup from './features/ShopSetup';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';

function App() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  const user = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        socket,
        currentRoom,
        setCurrentRoom,
        members,
        setMembers,
        messages,
        setMessages,
        privateMemberMsg,
        setPrivateMemberMsg,
        rooms,
        setRooms,
        newMessages,
        setNewMessages,
      }}
    >
      <BrowserRouter>
        {/* We should create a navigation component since not every page need the navigation open.
                <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                */}

        <Routes>
          <Route path='/' element={<Home />} />
          {!user && (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </>
          )}
          <Route path='/start' element={<Start />} />
          <Route path='/usersignup' element={<UserSignUp />} />
          <Route path='/accountsetup' element={<AccountSetup />} />
          <Route
            path='/emailverification'
            element={<AccountEmailVerification />}
          />
          <Route path='/profileimage' element={<ProfileImage />} />
          <Route path='/accounttype' element={<AccountTypeSelection />} />
          <Route path='/bioinput' element={<BioInput />} />
          <Route path='/connectsocial' element={<ConnectSocial />} />
          <Route path='/categoryselection' element={<CategorySelection />} />
          <Route path='/findlayer' element={<FindLayer />} />
          <Route path='/vendoraccountsetup' element={<VendorAccountSetup />} />
          <Route path='/vendortype' element={<VendorType />} />
          <Route path='/businessmethod' element={<BusinessMethod />} />
          <Route path='/vendorgoal' element={<VendorGoal />} />
          <Route
            path='/vendorsetupcomplete'
            element={<VendorSetupComplete />}
          />

          <Route path='/events' element={<Events />} />
          <Route path='/events-event' element={<Event />} />

          <Route path='/layer' element={<PopupDialog />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/refunds' element={<Refunds />} />
          <Route path='/refundspolicy' element={<RefundsPolicy />} />
          <Route path='/transaction' element={<TransactionHistory />} />
          <Route path='/shopsetup' element={<ShopSetup />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
