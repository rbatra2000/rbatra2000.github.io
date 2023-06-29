import { Divider, Grid, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

interface SubheadingProps {
  title: string;
}

export const Subheading: React.FC<SubheadingProps> = (
  props: SubheadingProps
) => {
  return (
    <div id={props.title}>
      <Grid container justifyContent="center" alignItems="center" spacing={0} style={{marginBottom: "10px"}}>
        <Grid item md={2}>
          <Typography variant="h2">{props.title}</Typography>
        </Grid>
        <Grid item md={10} sm={12} xs={12}>
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
}

export const WorkExperience: React.FC<WorkProps> = (props: WorkProps) => {
  const imageUri = `/../public/assets/work/${props.company}.png`;
  return (
    <Grid
      container
      item
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={2}>
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
      <Grid item sm={10}>
        <Typography style={{ marginBottom: "0px" }} paragraph>
          {props.description}
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
  const imageUri = `/../public/assets/books/${props.title}.jpeg`;
  const goodreadsUrl = `https://www.goodreads.com/book/show/${props.url}`
  
  return (
    <Grid item>
      <Link href={goodreadsUrl}>
        <Image
          src={imageUri}
          loading="lazy"
          height={100}
          width={100}
          alt={props.title}
        />
      </Link>
    </Grid>
  );
};

interface NavProps {
  section: string;
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
  // window.scrollTo({
  //   top: elem?.getBoundingClientRect().top,
  //   behavior: "smooth",
  // });
};

export const NavEntry: React.FC<NavProps> = (props: NavProps) => {
  const href = `#${props.section}`;
  return (
    <ListItem key={props.section} style={{paddingLeft: "0", paddingBottom: "0"}}>
      <Link href={href} onClick={handleScroll}>
        <Typography paragraph>{props.section}</Typography>
      </Link>
    </ListItem>
  );
};
