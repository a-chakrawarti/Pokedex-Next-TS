import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface IPaginationProps {
  gotoNextPage: () => void;
  gotoPreviousPage: () => void;
  isButtonDisabled: boolean;
}

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Pagination = ({
  gotoNextPage,
  gotoPreviousPage,
  isButtonDisabled,
}: IPaginationProps) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button
        size="small"
        disabled={isButtonDisabled}
        variant="contained"
        color="primary"
        onClick={gotoPreviousPage}>
        Previous
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={gotoNextPage}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
