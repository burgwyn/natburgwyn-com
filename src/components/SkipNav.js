import React from "react";
import PropTypes from "prop-types";

const style = {
    fontSize: "1.06rem",
    lineHeight: 1.5,
    color: "#005ea2",
    textDecoration: "underline",
    background: "0 0",
    left: 0,
    padding: ".5rem 1rem",
    position: "absolute",
    top: "-3.8rem",
    transition: ".2s ease-in-out",
    zIndex: 100,
};

const SkipNav = ({ href, text }) => (
    <a href={href} style={style}>{text}</a>
);

SkipNav.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
};

SkipNav.defaultProps = {
    href: "site-main",
    text: "Skip to main content",
};

export default SkipNav;
