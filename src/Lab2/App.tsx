import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CardList from './src/components/CardList';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export default function SwipeCard() {
  const [rawCharacters, setRawCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then((response) => response.json())
      .then((json) => setRawCharacters(json.results))
      .catch((error) => console.error(error));
  }, []);

  const memoizedCharacters = useMemo(() => rawCharacters, [rawCharacters]);

  return (
  <GestureHandlerRootView style={styles.mainGesture}>
    <View style={styles.mainContainer}>
      {memoizedCharacters && <CardList items={memoizedCharacters} />}
    </View>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainGesture: { flex: 1 },
  mainContainer: { flex: 1, justifyContent: 'center' },
});
