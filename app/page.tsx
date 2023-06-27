"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import theme from "./theme";

const drawerWidth = 250;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Home(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <div
        style={{ marginLeft: "15px" }} // TODO: hardcoded
      >
        <Image
          src="/../public/assets/black_logo.png"
          width={50}
          height={50}
          alt="logo"
        />
        <br />
        <Typography
          variant="h3"
          noWrap
          style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
        >
          ritik batra
        </Typography>
      </div>

      <List>
        {[
          "about",
          "research",
          "work",
          "teaching",
          "bookshelf",
          "creative",
          "writing",
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "inherit",
            border: "none",
          }}
        >
          <Toolbar>
            <IconButton
              // color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap component="div">
            hi there, i'm ritik!
          </Typography> */}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            // TODO: kind of want to move nav bar a little more to left
          }}
          aria-label="navigation"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRight: "none !important",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Container maxWidth="md">
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 4,
              // width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {/* <Toolbar /> */}
            <Typography variant="h1">hi, i'm ritik!</Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Image
                  src="/../public/assets/portrait.png"
                  loading="lazy"
                  height={1000}
                  width={1000}
                  alt="portrait image"
                  style={{
                    borderRadius: "50%",
                    border: "0px solid #000",
                    backgroundColor: "white",
                    width: "100%",
                    margin: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography paragraph sx={{ fontStyle: "italic" }}>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="h2">research</Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
            <Typography paragraph>
              <Box sx={{ fontStyle: "italic", m: 1 }}>
                Ritik Batra and Kaitlyn Yi Ran Lee. 2022. Redycler: Daily Outfit
                Texture Fabrication Appliance Using Re-Programmable Dyes. In
                Sixteenth International Conference on Tangible, Embedded, and
                Embodied Interaction (TEI '22). Association for Computing
                Machinery, New York, NY, USA, Article 41, 1–4.
                https://doi.org/10.1145/3490149.3502424
              </Box>
            </Typography>

            <Typography variant="h2">industry</Typography>
            <Typography variant="h2">teaching</Typography>
            <Typography variant="h2">bookshelf</Typography>
            <Typography variant="h2">creative</Typography>
            <Typography variant="h2">thoughts</Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
