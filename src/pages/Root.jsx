import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Sidebar />
      {navigation.state === "loading" && <Loader />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
