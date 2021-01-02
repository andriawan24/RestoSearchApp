import React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term was submitted')}
      />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
