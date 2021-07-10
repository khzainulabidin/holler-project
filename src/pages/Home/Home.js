import axios from "axios";
import {Fragment, useEffect, useState} from "react";
import TextError from "../../components/TextError/TextError";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import styles from './Home.module.css';
import Cards from "../../components/Cards/Cards";
import Heading from "../../components/Heading/Heading";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [textError, setTextError] = useState('');
    const [sortBy, setSortBy] = useState('none');

    const updateSortBy = e => {
        setSortBy(e.target.value);
    }

    const fetchCharacters = async () => {
        const {data} = await axios.get(`/characters`);
        return data;
    }

    const sortByName = (charactersList) => {
        charactersList.sort((a, b) => {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        return charactersList;
    }

    const sortByNickName = (charactersList) => {
        charactersList.sort((a, b) => {
            return a.nickname < b.nickname ? -1 : a.nickname > b.nickname ? 1 : 0;
        });
        return charactersList;
    }

    const sortByAppearances = (charactersList, type) => {
        charactersList.sort(function(a, b){
            a.appearance = a.appearance ? a.appearance : [];
            b.appearance = b.appearance ? b.appearance : [];
            return type === 'most'
                ?
                b.appearance.length - a.appearance.length
                :
                a.appearance.length - b.appearance.length;
        });
        return charactersList;
    }

    useEffect(() => {
        if (sortBy === 'none'){
            return;
        }

        const charactersCopy = [...characters];
        let updatedCharacters;
        switch (sortBy){
            case 'name':
                updatedCharacters = sortByName(charactersCopy);
                break;
            case 'nickname':
                updatedCharacters = sortByNickName(charactersCopy);
                break;
            case 'mostAppearances':
                updatedCharacters = sortByAppearances(charactersCopy, 'most');
                break;
            case 'leastAppearances':
                updatedCharacters = sortByAppearances(charactersCopy, 'least');
                break;
            default:
                updatedCharacters = charactersCopy;
        }

        setCharacters(updatedCharacters);
        //eslint-disable-next-line
    }, [sortBy])

    useEffect(() => {
        fetchCharacters()
            .then(data => {
                if (data){
                    setCharacters(data);
                }
                else {
                    setTextError('We got an error');
                }
                setIsLoading(false);
            })
            .catch(() => {
                setTextError('Unable to fetch characters');
                setIsLoading(false);
            });
    }, [])

    return (
        <Fragment>
            <LoadingSpinner isLoading={isLoading}/>

            {!isLoading &&
            <Fragment>
                <TextError>{textError}</TextError>
                <header className={styles.header}>
                    <Heading
                        heading={'Characters'}
                        desc={'Click/Hover over any image to see its information'}
                    />

                    <select
                        className={styles.dropdown}
                        value={sortBy}
                        onChange={e => updateSortBy(e)}
                    >
                        <option value={'none'}>Sort characters by</option>
                        <option value={'name'}>Name</option>
                        <option value={'nickname'}>Nickname</option>
                        <option value={'mostAppearances'}>Most Appearances</option>
                        <option value={'leastAppearances'}>Least Appearances</option>
                    </select>
                </header>
                <Cards characters={characters}/>
            </Fragment>}
        </Fragment>
    );
};

export default Home;
