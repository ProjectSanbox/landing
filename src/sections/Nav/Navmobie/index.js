import NavMobieWrapper from "./navmobie.style";
import Box from "reusecore/Box";
import Image from "reusecore/Image";
import Button from "reusecore/Button";
import logo from "assets/images/logo.png";
import { List, ListItem } from "reusecore/List";
import { VscChromeClose } from "react-icons/vsc";
import { AiFillHome } from "react-icons/ai";

const NavMobie = () => {
  return (
    <NavMobieWrapper>
      <Box className="navmobie">
        <Box className="nav-heading">
          <Box>
            <Image src={logo} />
          </Box>
          <Button>
            <VscChromeClose />
          </Button>
        </Box>
        <List className="nav-list">
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
          <ListItem>
            <a>
              <AiFillHome /> Home
            </a>
          </ListItem>
        </List>
      </Box>
    </NavMobieWrapper>
  );
};

export default NavMobie;
