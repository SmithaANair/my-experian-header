import React from "react";
import { render } from "react-dom";
import { PrimaryHeader, PrimaryHeaderNavItem } from "@wayfarer/components";

const hostElement = document.getElementById("navContainer");

function App() {
  return (
    <PrimaryHeader
      productName="My Experian"
      navItems={
        <>
          <PrimaryHeaderNavItem as="a" href="https://experian.com/">
            Home
          </PrimaryHeaderNavItem>
        </>
      } />
  );
}

render(<App />, hostElement);
