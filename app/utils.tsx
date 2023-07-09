import { Divider, Grid, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SubheadingProps {
  title: string;
}

export const Subheading: React.FC<SubheadingProps> = (
  props: SubheadingProps
) => {
  return (
    <div id={props.title}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        style={{ marginBottom: "25px" }}
      >
        <Grid item lg={2} md={2}>
          <Typography variant="h2">{props.title}</Typography>
        </Grid>
        <Grid item lg={10} md={10} sm={12} xs={12}>
          <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
        </Grid>
      </Grid>
    </div>
  );
};

interface PaperProps {
  text: string;
}

export const ResearchPaper: React.FC<PaperProps> = (props: PaperProps) => {
  return (
    <Box sx={{ fontStyle: "italic" }}>
      <Typography paragraph>{props.text}</Typography>
    </Box>
  );
};

interface WorkProps {
  company: string;
  description: string;
  role: string;
}

export const WorkExperience: React.FC<WorkProps> = (props: WorkProps) => {
  const imageUri = `/assets/experience/${props.company}.png`;
  return (
    <Grid item container justifyContent="center" sm={3} md={3} spacing={1}>
      <Grid item justifyContent="center" alignItems="center" container xs={12}>
        <Image
          src={imageUri}
          loading="lazy"
          key={props.company}
          height={75}
          width={75}
          alt={props.company}
          style={{
            borderRadius: "5%",
          }}
        />
      </Grid>
      <Grid item justifyContent="center" alignItems="center">
        <Typography align="center" paragraph>
          {props.role} • {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

interface TeachingProps {
  course: string;
  description: string;
  title: string;
}

export const TeachingExperience: React.FC<TeachingProps> = (
  props: TeachingProps
) => {
  const imageUri = `/assets/instruction/${props.course}.png`;
  return (
    <Grid item container justifyContent="center" sm={4} md={4} spacing={2}>
      <Grid item justifyContent="center" container alignItems="center" xs={12}>
        <Image
          src={imageUri}
          loading="lazy"
          key={props.course}
          height={75}
          width={75}
          alt={props.course}
          style={{
            borderRadius: "5%",
          }}
        />
      </Grid>
      <Grid item justifyContent="center" alignItems="center" xs={12}>
        <Typography align="center" paragraph>
          {props.description}
          <br />
          <i>{props.title}</i>
        </Typography>
      </Grid>
    </Grid>
  );
};

interface BookProps {
  title: string;
  url: string;
}

export const Book: React.FC<BookProps> = (props: BookProps) => {
  const imageUri = `/assets/books/${props.title}.jpeg`;
  const goodreadsUrl = `https://www.goodreads.com/book/show/${props.url}`;

  return (
    <Grid item sm={3}>
      <Link href={goodreadsUrl}>
        <Image
          src={imageUri}
          loading="lazy"
          height={100}
          width={100}
          alt={props.title}
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
          }}
        />
      </Link>
    </Grid>
  );
};

interface NavProps {
  section: string;
  handleClick: Function;
}

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

export const NavListItem: React.FC<NavProps> = (props: NavProps) => {
  const href = `#${props.section}`;
  return (
    <ListItem
      key={props.section}
      style={{ paddingLeft: "0", paddingBottom: "0" }}
    >
      <Link
        href={href}
        onClick={async (e) => {
          handleScroll(e);
          // // TODO: I hate this lol have to fix this at some point
          // setTimeout(function () {
          //   props.handleClick();
          // }, 0);
        }}
        className={"navListItem"}
      >
        <Typography paragraph className={"navListItemText"}>
          {props.section}
        </Typography>
      </Link>
    </ListItem>
  );
};

interface MediaProps {
  title: string;
  path: string;
  type: string;
  url?: string;
}

export const MediaItem: React.FC<MediaProps> = (props: MediaProps) => {
  const imageUri = `/assets/art/${props.path}.${props.type}`;

  return (
    <Grid item key={props.path} xs={6} sm={3} md={3}>
      <Image
        src={imageUri}
        loading="lazy"
        height={1000}
        width={1000}
        alt={props.title}
        style={{
          borderRadius: "10%",
          //   width: "100%",
          //   height: "100%",
          //   margin: "auto",
        }}
      />
    </Grid>
  );
};

export enum PortraitEnum {
  DEFAULT = "default",
  GRAD = "grad",
  ENGINEER = "engineer",
}

// interface PortraitProps {
//   title: PortraitEnum;
// }

// export const Portrait: React.FC<PortraitProps> = (props: PortraitProps) => {
//   const imageUri = `/assets/portraits/${props.title}.png`;

//   return (
//     <>
//       <Image
//         src={`/assets/portraits/${PortraitEnum.DEFAULT}.png`}
//         loading="lazy"
//         height={1000}
//         width={1000}
//         alt="self portrait drawing"
//         style={{
//           borderRadius: "50%",
//           border: "0px solid #000",
//           backgroundColor: "white",
//           width: "100%",
//           opacity: "0",
//           height: "auto",
//           margin: "auto",
//           transition: "all 1s ease-in-out",
//         }}
//       />

//       <Image
//         src={`/assets/portraits/${PortraitEnum.GRAD}.png`}
//         loading="lazy"
//         height={1000}
//         width={1000}
//         alt="self portrait drawing"
//         style={{
//           borderRadius: "50%",
//           border: "0px solid #000",
//           backgroundColor: "white",
//           width: "100%",
//           opacity: "0",
//           height: "auto",
//           margin: "auto",
//           transition: "all 1s ease-in-out",
//         }}
//       />

//       <Image
//         src={`/assets/portraits/${PortraitEnum.ENGINEER}.png`}
//         loading="lazy"
//         height={1000}
//         width={1000}
//         alt="self portrait drawing"
//         style={{
//           borderRadius: "50%",
//           border: "0px solid #000",
//           backgroundColor: "white",
//           width: "100%",
//           opacity: "0",
//           height: "auto",
//           margin: "auto",
//           transition: "all 1s ease-in-out",
//         }}
//       />
//     </>
//   );
// };

interface PortraitTriggerProps {
  text: string;
  image: PortraitEnum;
  setter: Function;
}

export const PortraitTrigger: React.FC<PortraitTriggerProps> = (
  props: PortraitTriggerProps
) => {
  return (
    <>
      {" "}
      <a
        onMouseEnter={() => {
          props.setter(props.image);
        }}
        onMouseLeave={() => {
          props.setter(PortraitEnum.DEFAULT);
        }}
        style={{ display: "inline-block" }}
      >
        {props.text}
      </a>{" "}
    </>
  );
};
