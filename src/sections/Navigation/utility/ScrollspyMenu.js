import React from "react";
import { Link as OnepageLink } from "react-scroll";
import Link from "next/link";

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
          <OnepageLink
            activeClass="nav-active"
            to={menu.path}
            spy={true}
            smooth={true}
            offset={parseInt(menu.offset)}
            duration={700}
          >
            {menu.name}
          </OnepageLink>
          {menu.subItems !== undefined && (
            <ul key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                <li key={i}>
                  <a
                    onClick={() => {
                      window.open(subItem.path);
                    }}
                  >
                    {subItem.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li>
        <button className="nav__button">Contact Us</button>
      </li>
    </ul>
  );
};

export default ScrollspyMenu;
