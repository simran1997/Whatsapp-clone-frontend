import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import { SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/ag7E0chd8LZmLR1-N6ddkgWeJ6BGj9SgaGmtbqFtUHaBavNHUi4oVeX_E2u0iDuGnUg9rk1LuBp6gpWqPN1I3Y3jSZLPUEJJwkeQOJC3xDHfG5p7UkIJW8TT9SK7o_UU3qxnKguJTLwrgJVzBmxkIfuuDJKjh-jzW4mbGT40K0NivQhTZBG9Fjxl4_lqOdthgL4ZfJiocW98ceCDfmSTrbpaCkIbX6sRrqbZMrHJSekVKEN2fbYkMIiRKckjaV20riEu0xbDp_ATQVQN3-jgnq2-XExW2j6BkPoW-i4UoCS3uEVGyeetJNiZwFiH3Betn00vmY44I6PZFi5x2ce3opgQY1MctI0SHSWvU1J4Tb2MN-YkZ-_zNbYD-eqXw8QKQzpHPZpxA3iBZ16tWopudhojMv4KJlIFhj1egoihPaPZSI4v0mVYYIj4VfrZaZBGlMpsz3nBU3zl00u8ccYf3P3y0Pb45BviKgnCql8ikWi0fHBpvlgrHv5d2CwnD4Sn26EPik1MRg-nXzajYA6tyTv0agG4X-4pP9t1kfZuejCow6IFJmexT5Qg7XWFrmF7xY-RblRE2LTe_4Vn8R9POngX31Jp3HKhcZDRgrYMKpQt6jDHnhwV3atNCQTRuwcVjEIJ3Ca_JRy2SFsiSi5aLHfsW-IqbfiFqjZZJuBhR-dlBxWe10RW-CFQgN1zjQ=w1382-h1842-no?authuser=0" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search..." type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
