import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-200 lg:text-lg p-5">
      <NavbarItem title="Login" param="LoginPage" />
      <NavbarItem title="Contact Us" param="ContactUsPage" />
      <NavbarItem title="Apply Here" param="ApplicationPage" />
      <NavbarItem title="Budget Now" param="BudgetPage" />
      <NavbarItem title="Loan Calculator" param="CalculatorPage" />
    </div>
  );
}
