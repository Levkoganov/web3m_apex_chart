import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex" }}>
              <h3>WEB3M</h3>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
