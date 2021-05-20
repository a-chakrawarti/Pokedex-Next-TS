import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

interface IPokeItem {
  name: string;
  id: string;
}

interface IPokeItemProps {
  data: IPokeItem;
}

const useStyles = makeStyles({
  capitalize: {
    textTransform: "capitalize",
  },
});

const PokeItem = ({ data }: IPokeItemProps) => {
  const classes = useStyles();
  const { name, id } = data;
  return (
    <div>
      <ListItem button>
        <ListItemText
          className={classes.capitalize}
          primary={`#${id} ${name}`}
        />
      </ListItem>
    </div>
  );
};

export default PokeItem;
