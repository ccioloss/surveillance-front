import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/recordings"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <VideoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Recordings" />
      </ListItem>
    </NavLink>

    <NavLink to="/devices" style={{ color: "inherit", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Devices" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/settings"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </NavLink>
  </div>
);
