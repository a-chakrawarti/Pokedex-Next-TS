import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "0.25rem",
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar style={{ backgroundColor: "#333" }} position="relative">
      <Toolbar variant="regular">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu">
          <Link href="/">
            <a>
              <Avatar className="wobble" alt="Icon" src="/favicon.png" />
            </a>
          </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Pokédex
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
