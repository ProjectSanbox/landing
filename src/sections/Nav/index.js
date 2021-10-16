import React, { useEffect } from "react";
import NavWrapper from "./nav.style";
import Box from "reusecore/Box";
import Image from "reusecore/Image";
import Button from "reusecore/Button";
import { Container } from "reusecore/Layout";
import logo from "assets/images/logo.png";
import { List, ListItem } from "reusecore/List";

import { useState } from "react";
import data from "assets/data/nav";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";

const Nav = () => {
  let count = 0;
  const [toggle, setToggle] = useState({
    status: false,
    active: "",
  });

  const [show, setShow] = useState(false);

  const [showChild, setShowChild] = useState(false);

  const handleToggleMenu = (value) => {
    setToggle({ ...toggle, status: value });
    if (value === true) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "unset";
    }
  };

  useEffect(() => {
    const header = document.getElementById("header");

    if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
      header.style.background = "#17181C";
      header.style.transition = "0.5s";
      header.style.marginTop = "0";
    } else {
      header.style.background = "transparent";
      header.style.marginTop = "44px";
    }

    // scroll
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
        header.style.background = "#17181C";
        header.style.transition = "0.5s";
        header.style.marginTop = "0";
      } else {
        header.style.background = "transparent";
        header.style.marginTop = "44px";
      }
    });

    const url = window.location.href;
    let value = url.split("#")[1];
    if (value) {
      setToggle({ ...toggle, active: value });
    } else {
      value = "home";
      setToggle({ ...toggle, active: value });
    }

    const sections = document.querySelectorAll(".section");
    const nav = document.querySelectorAll(".menu li");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      nav.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  return (
    <>
      <NavWrapper className="section" id="header">
        {/* nav mobie */}
        <Box className={toggle.status ? "nav-mobile open" : "nav-mobile"}>
          <Box className="overlay">&nbsp;</Box>
          <List className="list-mobile">
            <Button className="menu-close">
              <AiOutlineClose onClick={() => handleToggleMenu(false)} />
            </Button>
            {data.navMobie.map((nav, index) => (
              <ListItem className={nav.class} key={index}>
                {(nav.list && (
                  <a onClick={() => setShow(true)} href="javascript:0">
                    {nav.content}
                  </a>
                )) || (
                  <a
                    onClick={() => handleToggleMenu(false)}
                    target={nav.target}
                    href={nav.link}
                  >
                    {nav.content}
                  </a>
                )}

                {nav.list && <AiOutlineRight />}

                {nav.list && (
                  <List
                    className={show ? "listChildMobie show" : "listChildMobie"}
                  >
                    {nav.list.map((list, i) => (
                      <ListItem key={i}>
                        {(list.listChild && (
                          <a
                            onClick={() => setShowChild(!showChild)}
                            id={list.id}
                            href={list.link}
                          >
                            {list.content}
                          </a>
                        )) || (
                          <a id={list.id} href={list.link}>
                            {list.content}
                          </a>
                        )}
                        {list.listChild && (
                          <List
                            className={
                              showChild
                                ? "listChildestMobie show"
                                : "listChildestMobie"
                            }
                          >
                            {list.listChild.map((listChild, i) => (
                              <ListItem key={i}>
                                <Image src={listChild.icon} />
                                <a target="_blank" href={listChild.link}>
                                  {listChild.content}
                                </a>
                              </ListItem>
                            ))}
                          </List>
                        )}
                        {nav.list && <HiChevronDown className="dropdown" />}
                      </ListItem>
                    ))}
                    <ListItem>
                      <Button className="menu-close">
                        <AiOutlineClose onClick={() => setShow(false)} />
                      </Button>
                    </ListItem>
                  </List>
                )}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Nav - PC */}
        <Container>
          <Box className="header">
            <Box className="logo">
              <a href="/">
                <Image src={logo} />
              </a>
            </Box>
            <Box className="nav hide">
              <List className="menu">
                {data.nav.map((nav, i) => (
                  <ListItem
                    className={
                      toggle.active === nav.linkActive
                        ? `active ${nav.class}`
                        : nav.class
                    }
                    key={i}
                  >
                    <a
                      onClick={() =>
                        setToggle({ ...toggle, active: nav.linkActive })
                      }
                      target={nav.target}
                      href={nav.link}
                    >
                      {nav.content}
                    </a>

                    {nav.list && <RiArrowDropDownLine />}

                    {nav.list && (
                      <List className="listChild">
                        {nav.list.map((list, i) => (
                          <ListItem key={i}>
                            <a link={list.link}>{list.content}</a>
                            {list.listChild && <BiChevronRight />}
                            {list.listChild && (
                              <List className="listChildest">
                                {list.listChild.map((listChild, i) => (
                                  <ListItem key={i}>
                                    <Image src={listChild.icon} />
                                    <a target="_blank" href={listChild.link}>
                                      {listChild.content}
                                    </a>
                                  </ListItem>
                                ))}
                              </List>
                            )}
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box className="toggle">
              <Button onClick={() => handleToggleMenu(true)}>
                <GoThreeBars />
              </Button>
            </Box>
          </Box>
        </Container>
      </NavWrapper>
      {/* <NavMobie /> */}
    </>
  );
};

export default Nav;
