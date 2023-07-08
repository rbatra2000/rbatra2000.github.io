"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Container from "@mui/material/Container";
import { Analytics } from "@vercel/analytics/react";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import theme from "./theme";
import {
  Book,
  MediaItem,
  NavListItem,
  ResearchPaper,
  Subheading,
  TeachingExperience,
  WorkExperience,
} from "./utils";

const drawerWidth = 150;
// interface PageProps {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function Home() {
  // const { window } = props;
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
        <Image src="/assets/black_logo.png" width={50} height={50} alt="logo" />
        <br />
        <Typography
          variant="h3"
          noWrap
          style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
        >
          ritik batra
        </Typography>

        {/* TODO: I don't like this transition lol should be more of a wipe */}
        <List>
          {[
            "about",
            "research",
            "industry",
            "teaching",
            "bookshelf",
            "creative",
            // "thoughts",
          ].map((text) => (
            <NavListItem
              section={text}
              key={text}
              handleClick={handleDrawerToggle}
            />
          ))}
        </List>
        <Typography
          paragraph
          style={{
            position: "fixed",
            bottom: "0",
            textAlign: "center",
            paddingBottom: "10px",
          }}
        ></Typography>
      </div>
    </div>
  );

  return (
    <>
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
            {/* TODO: At some point should make the words bold as you scroll through */}
            <Drawer
              // container={container}
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
              <div id="about">
                <Typography variant="h1">hi, i'm ritik!</Typography>
              </div>
              <div className="subsection">
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    {/* TODO: It would be cool to make this picture change as you highlight over different words (I.e. phd add a grad cap and gown, stripe add glasses and tech shirt, nyc add a funny t shirt for nyc, craftmanship add a tattoos or smth) */}
                    <Image
                      src="/assets/portrait.png"
                      loading="lazy"
                      height={1000}
                      width={1000}
                      alt="portrait image"
                      style={{
                        borderRadius: "50%",
                        border: "0px solid #000",
                        backgroundColor: "white",
                        width: "100%",
                        height: "auto",
                        margin: "auto",
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography paragraph>
                      {/* I am an incoming <strong>PhD student</strong> in Information
                    Science at Cornell University, advised by Cindy H. Kao.
                    Until the semester begins, I will be continuing to work as a{" "}
                    <strong>software engineer</strong> at Stripe in NYC and
                    exploring what the city has to offer.
                    <br />
                    <br />I am constantly seeking opportunities to complement my
                    technical background through self-expression. Through this
                    journey, I have been reflecting about how{" "}
                    <strong>craftsmanship</strong> serves as an intersection of
                    art and technology that not only empowers individuals but
                    also preserves cultural symbols and traditions with deep
                    historical significance. Through the exploration of these
                    worlds, I hope to forge new pathways towards personal and
                    inclusive fabrication. */}
                      I am an incoming PhD student in Information Science at
                      Cornell University, advised by Cindy H. Kao. Until the
                      semester begins, I will be continuing to work as a
                      software engineer at Stripe in NYC and exploring what the
                      city has to offer.
                      <br />
                      <br />I am constantly seeking opportunities to complement
                      my technical background through self-expression. Through
                      this journey, I have been reflecting about how
                      craftsmanship serves as an intersection of art and
                      technology that not only empowers individuals but also
                      preserves cultural symbols and traditions with deep
                      historical significance. Through the exploration of these
                      worlds, I hope to forge new pathways towards personal and
                      inclusive fabrication.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div className="subsection">
                <Subheading title="research" />
                <Typography variant="h3">statement</Typography>
                <Typography paragraph>
                  The central theme of my work is inspired by a curiosity of how
                  we can rely on technology to create tailored experiences for
                  us to extend our identity to our objects, machines, and
                  environment. In a world with personalized fabrication, users
                  have more control over their environment by shaping their
                  tools, clothing, and interfaces to fit their needs rather than
                  adjusting to what is available. This inspires more accessible
                  design tools for fabrication and smaller expertise gaps in
                  manufacturing.
                </Typography>
                <Typography variant="h3">papers</Typography>

                <ResearchPaper
                  text="Ritik Batra and Kaitlyn Yi Ran Lee. 2022.
                  Redycler: Daily Outfit Texture Fabrication Appliance Using
                  Re-Programmable Dyes. In Sixteenth International Conference on
                  Tangible, Embedded, and Embodied Interaction (TEI '22).
                  Association for Computing Machinery, New York, NY, USA,
                  Article 41, 1–4. https://doi.org/10.1145/3490149.3502424"
                />
                <ResearchPaper
                  text="Alice Agogino, Hae Young Jang, Vivek Rao,
                  Ritik Batra, Felicity Liao, Rohan Sood,
                  Irving Fang, R. Lily Hu, Emerson Shoichet-Bartus, John
                  Matranga. 2021. Dynamic Placement of Rapidly Deployable Mobile
                  Sensor Robots Using Machine Learning and Expected Value of
                  Information. In Proceedings of the ASME 2021 International
                  Mechanical Engineering Congress and Exposition. Volume 13:
                  Safety Engineering, Risk, and Reliability Analysis; Research
                  Posters. Virtual, Online. V013T14A027. ASME.
                  https://doi.org/10.1115/IMECE2021-70759"
                />
              </div>

              <div className="subsection">
                <Subheading title="industry" />
                <Grid container spacing={2}>
                  <WorkExperience
                    company="stripelogo"
                    description="link consumer experience"
                    role="software engineer"
                  />

                  <WorkExperience
                    company="asanalogo"
                    description="android foundations"
                    role="product engineering intern"
                  />
                  <WorkExperience
                    company="goldmansachs"
                    description="corporate workplace solutions"
                    role="summer engineering analyst"
                  />

                  <WorkExperience
                    company="rally_health"
                    description="mobile engineering"
                    role="iOS software engineering intern"
                  />
                </Grid>
              </div>

              <div className="subsection">
                <Subheading title="teaching" />
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  columns={12}
                >
                  <TeachingExperience
                    course="databases"
                    description="compsci 186: introduction to database"
                    title="undergraduate student instructor"
                  />
                  <TeachingExperience
                    course="interfaces"
                    description="compsci 160: user interface design and development"
                    title="undergraduate student instructor"
                  />
                  <TeachingExperience
                    course="data_structures"
                    description="compsci 61b: data structures"
                    title="lab assistant & content mentor"
                  />
                </Grid>
                {/* cs186, cs160, cs61b */}
                {/* TODO idea is simple flaticon logos for this where you show what the class is kinda and position (like work exp) */}
              </div>

              <div className="subsection">
                <Subheading title="bookshelf" />
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  columns={16}
                >
                  <Book title="bad_blood" url="37976541-bad-blood" />
                  <Book title="my_own_words" url="29868604-my-own-words" />
                  <Book
                    title="the_last_lecture"
                    url="40611510-the-last-lecture"
                  />
                  <Book title="becoming" url="38746485-becoming" />
                  <Book
                    title="the_little_prince"
                    url="157993.The_Little_Prince"
                  />
                  <Book title="range" url="41795733-range" />
                  <Book
                    title="stories_of_your_life_and_others"
                    url="223380.Stories_of_Your_Life_and_Others"
                  />
                </Grid>
              </div>

              {/* TODO: eventually make the hoverable */}
              <div className="subsection">
                <Subheading title="creative" />
                <Typography variant="h3" style={{ marginBottom: "10px" }}>
                  i like making "stuff".{" "}
                  {/* <Link style={{textDecoration: "underline"}} href="https://www.instagram.com/ritikulousdesigns">
                  @ritikulousdesigns
                </Link> */}
                </Typography>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  columns={{ xs: 12, sm: 9, md: 9, lg: 9 }}
                >
                  <MediaItem title="moon drip" path="moon_drip" type="jpeg" />
                  <MediaItem
                    title="glass planet"
                    path="glass_planet"
                    type="png"
                  />
                  <MediaItem title="dance clip" path="forever" type="gif" />
                  <MediaItem
                    title="broadway dance"
                    path="dance_bdc"
                    type="gif"
                  />

                  {/* <MediaItem title="mountains" path="mountains" type="jpeg" /> */}
                  <MediaItem
                    title="lady strandbeest"
                    path="strandbeest1"
                    type="gif"
                  />
                  <MediaItem title="stool" path="stool" type="jpeg" />

                  <MediaItem
                    title="story of a pencil"
                    path="pencil"
                    type="gif"
                  />
                  {/* <MediaItem title="house" path="house" type="png" /> */}
                  <MediaItem
                    title="creative coding"
                    path="creative_coding"
                    type="gif"
                  />
                  <MediaItem title="plate" path="design_plate" type="jpeg" />
                </Grid>
              </div>

              {/* <div className="subsection">
              <Subheading title="thoughts" />
              <Typography paragraph>
                Coming soon!!
              </Typography>
            </div> */}
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
