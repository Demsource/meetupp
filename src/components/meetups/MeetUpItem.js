import { useContext } from "react";
import { useLocation } from "react-router-dom";
import MeetupsContext from "../../strore/meetups-context";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";

const MeetUpItem = ({ meetup }) => {
  let location = useLocation();

  const { deleteMeetup, toggleFavorite } = useContext(MeetupsContext);
  const { id, image, title, address, description, isFavorite } = meetup;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div
          className={`${classes.actions} ${
            isFavorite && location.pathname === "/" ? classes.favMark : ""
          }`}
        >
          <button
            className={isFavorite ? classes.delete : classes.add}
            onClick={() => toggleFavorite(id, isFavorite)}
          >
            {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
          <button className={classes.delete} onClick={() => deleteMeetup(id)}>
            Cancel Meetup
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
