import styles from './ProfileCard.module.css';
import {useState} from "react";
import {v4 as uuid} from 'uuid';

const ProfileCard = ({character}) => {
    const [infoVisible, setInfoVisible] = useState(false);

    const displayInfo = () => {
        setInfoVisible(true);
    }

    const hideInfo = () => {
        setInfoVisible(false);
    }

    return (
        <div
            className={styles.profileCard}
            onMouseEnter={displayInfo}
            onMouseLeave={hideInfo}
        >
            <img
                className={styles.profileCardImage}
                src={character.img}
                alt={character.name}
            />

            <div className={styles.info} style={{display: infoVisible ? 'block' : 'none'}}>
                {character.name &&
                <p className={styles.name}>{character.name}</p>}

                {character.nickname &&
                <p className={styles.nickname}>{character.nickname}</p>}

                {character.appearance && character.appearance.length > 0 &&
                <p className={styles.infoText}>Appearance: {character.appearance.join(', ')}</p>}

                {character.portrayed &&
                <p className={styles.infoText}>Portrayed: {character.portrayed}</p>}

                {character.status &&
                <p className={styles.infoText}>Status: {character.status}</p>}

                {character.occupation && character.occupation.length > 0 &&
                <div className={styles.occupation}>
                    <p>Occupation:</p>
                    <ul>
                        {character.occupation.map(occupation =>
                            <li key={uuid()}>{occupation}</li>
                        )}
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default ProfileCard;
