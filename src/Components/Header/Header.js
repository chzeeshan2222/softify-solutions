import React from "react";
import "./Header.css";  // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid vh-100 bg-success">
        <div className="row">
          <div className="col-md-6 left">
            <h1 className="">Your IT Solutions Partner</h1>
            <p className="slogan">Transforming Ideas into Reality</p>
          </div>
          <div className="col-md-6 right">
            {/* You can add any additional content for the right side of the header */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
