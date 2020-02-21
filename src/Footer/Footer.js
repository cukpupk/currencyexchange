import React from "react";

const Footer = () => {
    const year = (new Date()).getFullYear().toString();
    return (
        <div className="footer">
            <p>Tommy Tang &copy; {year}, All Right Reserved</p>
        </div>
    )
};

export default Footer;
