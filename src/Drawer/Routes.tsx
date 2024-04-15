import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../Pages/Home";
// import EWalet from "../Pages/E-Walet";
// import MoneyTransfer from "../Pages/MoneyTransfer";
// import CryptoWalet from "../Pages/Crypto-Walet";
// import CryptoExchange from "../Pages/CryptoExchange";

// import Salon from "../Pages/Salon";
// import Recharge from "../Pages/Recharge";
// import HomeServices from "../Pages/Home-Services";
// import Token from "../Pages/Token";
// import Freelance from "../Pages/Freelance";
// import TokenAllocation from "../Pages/Token-Allocation";
// import ExchangePartners from "../Pages/Exchange-Partners";
// import TokenDocuments from "../Pages/Token-Documents";
// import Marketing from "../Pages/Digital-mark";
// import Hire from "../Pages/Hire-Developer";
// import Payment from "../Pages/PaymentService";
// import Investment from "../Pages/Investment";

/**
 * AppRoutes will load the app routes.
 * @returns
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home />} />
      <Route path="/product/e-walet" element={<EWalet />} />
      <Route path="/product/money-transfer" element={<MoneyTransfer />} />
      <Route path="/product/cripto-walet" element={<CryptoWalet />} />
      <Route path="/product/crypto-exchange" element={<CryptoExchange />} />
      <Route path="/product/cripto-walet" element={<CryptoWalet />} />
      <Route path="/product/beauty-salon" element={<Salon />} />
      <Route path="/product/recharge" element={<Recharge />} />
      <Route path="/product/home-services" element={<HomeServices />} />
      <Route path="/product/Freelance" element={<Freelance />} />
      <Route path="/product/Freelance" element={<Freelance />} />
      <Route path="/token" element={<Token />} />
      <Route path="/token/allocation" element={<TokenAllocation />} />
      <Route path="/token/exchange-partners" element={<ExchangePartners />} />
      <Route path="/token/document" element={<TokenDocuments />} />
      <Route path="/earning/investment" element={<Investment />} />

      <Route path="/services/digital-marketing" element={<Marketing />} />
      <Route path="/services/hire-developer" element={<Hire />} />
      <Route path="/services/payment-solution" element={<Payment />} /> */}

      <Route element={<Navigate replace to="/home" />} path="*" />
    </Routes>
  );
};

export default AppRoutes;
