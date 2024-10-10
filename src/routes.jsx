// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestApi from "./pages/Api/RestApi"

// import TxsPage from './TxsPage';
// import TxPage from './TxPage';
// import BlocksPage from './BlocksPage';
// import AccountsPage from './AccountsPage';
// import VerticalContractsPage from './VerticalContractsPage';
// import TokensPage from './TokensPage';
// import TokenPage from './TokenPage';
// import StatsPage from './StatsPage';
// import ApiDocsPage from './ApiDocsPage';
// import ApiDocsShardPage from './ApiDocsShardPage';
// import GraphQLPage from './GraphQLPage';
// import ContractVerificationPage from './ContractVerificationPage';


import Home from './pages/Home/Home';
import ContractVerificationForm from './pages/Others/Verify-Contract/VerifyContract';
import GasTrackerPage from './pages/Others/Gas-Tracker/gasTracker';
import Token from './pages/Tokens/Token';
import TransactionPage from './pages/Blockchain/TransactionPage';
import Contract from './pages/Blockchain/Contract';
import TopAccount from './pages/Blockchain/TopAccount';


// import Addressdetails from './pages/Blockchain/addressdetails';
import Block from './pages/Blockchain/Block';
import AccountStats from './components/AccountStats';
import Charts from './pages/Charts&Stats/ChartsandStats';
import MainLayout from './layout/layout';
import AddressDetails from './pages/Blockchain/addressdetails';



const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/txs" element={<TransactionPage />} />
          <Route path="/blocks" element={<Block />} />
          <Route path="/accounts" element={<TopAccount />} />
          {/* <Route path="/accounts/id" element={<TopAccount />} /> */}
          <Route path="/accounts" element={<TopAccount />} />
          <Route path="/accounts/id" element={<AddressDetails />} />
          <Route path="/verified-contracts" element={<Contract/>} />
          <Route path="/tokens" element={<Token />} />
          {/* <Route path="/token/id" element={<TokenPage />} /> */}
          <Route path="/api-docs" element={<RestApi />} />
        
          <Route path="/hi" element={<AddressDetails/>}/>

          <Route path="/stats" element={<Charts/>} />
          <Route path="/gas-tracker" element={<GasTrackerPage/>} /> 
          <Route path="/contract-verification" element={<ContractVerificationForm />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
