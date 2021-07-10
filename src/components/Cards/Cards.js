import styles from './Cards.module.css';
import {v4 as uuid} from "uuid";
import ProfileCard from "./ProfileCard/ProfileCard";

const Cards = ({characters}) => (
    characters && characters.length > 0 &&
    <div className={styles.cards}>
        {characters.map(character => (
            <ProfileCard key={uuid()} character={character}/>
        ))}
    </div>
);

export default Cards;
