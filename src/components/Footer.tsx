import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  copyright: {
    flexGrow: 1,
    alignSelf: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.copyright}>
          Pokémon and Pokémon character names are trademarks of Nintendo.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
