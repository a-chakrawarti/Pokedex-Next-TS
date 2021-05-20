import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import capitalize from "../lib/capitalize";
import Image from "next/image";
import Chip from "@material-ui/core/Chip";

export interface IPokeDetails {
  name: string;
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  height: string;
  weight: string;
  moves: { move: { name: string; url: string }; version_group_details: [] }[];
  front_default: string;
}

interface PokeDetailsProps {
  pokeDetails: IPokeDetails;
}

const useStyles = makeStyles({
  detailsContainer: {
    margin: "auto",
  },

  chip: {
    margin: "0.25rem",
  },

  movesContainer: {
    width: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  moves: {
    minWidth: "60%",
    padding: "0.5rem 2rem",
    margin: "2rem auto",
    height: "100%",
    maxWidth: "80%",
  },

  paper: {
    padding: "0.5rem 2rem",
    margin: "auto 0",
    height: "100%",
    maxWidth: "80%",
  },
});

const PokeDetails = ({ pokeDetails }: PokeDetailsProps) => {
  const { name, abilities, height, weight, moves, front_default } = pokeDetails;

  const classes = useStyles();

  return (
    <div className={classes.detailsContainer}>
      <Typography align="center" gutterBottom display="block" variant="h3">
        {capitalize(name)}
      </Typography>
      <Grid container justify="center" spacing={6}>
        <Grid item>
          <Image src={front_default} alt={name} width={300} height={400} />
        </Grid>
        <Paper className={classes.paper} elevation={3}>
          <Grid item>
            <div>
              <Typography gutterBottom>
                <b>Height: </b> {height}
              </Typography>
              <Typography gutterBottom>
                <b>Weight: </b> {weight}
              </Typography>
              <Typography>
                <b>Abilities: </b>
                {abilities.map((item, index) => (
                  <Chip
                    className={classes.chip}
                    color="primary"
                    label={item.ability.name}
                    key={index}
                  />
                ))}
              </Typography>
            </div>
          </Grid>
        </Paper>
      </Grid>
      <Paper className={`${classes.moves}`} elevation={3}>
        <Typography style={{ margin: "1rem 0" }} display="block">
          Moves ( {moves.length} )
        </Typography>
        <div className={classes.movesContainer}>
          {moves.map((item, index) => {
            return (
              <Chip
                label={item.move.name}
                className={classes.chip}
                key={index}
              />
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default PokeDetails;
