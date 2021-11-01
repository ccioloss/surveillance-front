import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Link } from "react-router-dom";
import { List } from "@mui/material";

const MenuListItems = () => {
  return (
    <List>
      <ListItem>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
      </ListItem>
      <ListItem>
        <Link
          to="/recordings"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Recordings" />
          </ListItem>
        </Link>
      </ListItem>
      <ListItem>
        <Link
          to="/devices"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItem>
        </Link>
      </ListItem>
      <ListItem>
        <Link
          to="/settings"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </ListItem>
    </List>
  );
};
export default MenuListItems;
