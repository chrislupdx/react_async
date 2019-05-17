import React from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.css';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map((character, i) => {
    <li key={i}>
      <Character character={character} />
    </li>;
  });

  return (
    <ul className={styles.Characters}>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
