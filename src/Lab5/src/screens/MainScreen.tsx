import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import { debounce } from 'lodash';
import { fetchUserData, User } from '../api/ApiService';
import useDebounce from '../hooks/useDebounce';


const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const myDebouncedSearch = useDebounce<string>(searchTerm, 500); // This implementation is for my debounce hook
  const [filteredData, setFilteredData] = useState([]);
  const { data, isLoading, isError } = useQuery('users', fetchUserData, {
    retry: 3,
  });

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const debouncedSearch = debounce((text: string) => {
    console.log('Lodash debounce');
    setFilteredData(
      data.filter((user: { name: string }) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, 500);

  // This useEffect is for my debounce hook
  useEffect(() => {
    // This implementation runs fewer times than the lodash one
    // You can comment out the lodash one and uncomment this one to see the difference
    console.log('Custom debounce');
    if (data) {
      setFilteredData(
        data.filter((user: { name: string }) =>
          user.name.toLowerCase().includes(myDebouncedSearch.toLowerCase())
        )
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myDebouncedSearch]);

  const handleInputChange = (text: string) => {
    setSearchTerm(text);
    debouncedSearch(text);
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error fetching user data. Please try again later.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Search users"
          value={searchTerm}
          onChangeText={handleInputChange}
          style={{
            borderBottomWidth: 1,
            borderColor: '#ccc',
            padding: 8,
            margin: 16,
          }}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: User }) => (
            <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ddd' }}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
