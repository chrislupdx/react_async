import React, { PureComponent } from 'react';
import { getCharacters } from '../../services/rickAndMortyApi';
import Characters from '../../Components/Characters/Characters';
// import Loading from '../../Components/Loading';

export default class Allcharacters extends PureComponent {
    state = {
      characters: [],
      // loading: true
    }

    fetchCharacters = () => {
      this.setState({ loading: true });
      getCharacters()
        .then(({ characters }) => this.setState({ characters, loading: false }));
    }

    componentDidMount() {
      this.fetchCharacters();
    }
    
    render() {
      const { characters, loading } = this.state;
      // if(loading) return <Loading />;
      return <Characters characters={characters} />;
    }
}
