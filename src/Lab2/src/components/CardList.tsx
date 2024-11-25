import React, { useRef } from 'react';
import Card from './Card';
import { Character } from '../../App';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItemInfo, StyleSheet, Text } from 'react-native';
import CustomImage from './CustomImage';

interface CardListProps {
  items: Character[];
}

const renderCard = (item: Character, index: number, limit: number, ref: React.MutableRefObject<FlatList<Character> | null>) => (
  <Card index={index} limit={limit} color="coral" flatListRef={ref}>
    <Text style={[styles.itemText]}>{item.name}</Text>
    <CustomImage uri={item.image} />
  </Card>
);

const CardList = ({ items }: CardListProps) => {
  const flatListRef = useRef<FlatList<Character> | null>(null);
  return (
    <FlatList
      ref={flatListRef}
      data={items}
      renderItem={(item: ListRenderItemInfo<Character>) => renderCard(item.item, item.index, items.length, flatListRef)}
      keyExtractor={item => `item-${item.id}`}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CardList;
