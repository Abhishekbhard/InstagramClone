import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';

import {listStories} from '../../graphql/queries';

import Story from '../UserStoryPreview';
import styles from './styles';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const fetchStories = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listStories));
      console.log(postData.data.listStor);
      setStories(postData.data.listStories.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        horizontal
        keyExtractor={({id}) => id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Story story={item} />}
      />
    </View>
  );
};

export default Stories;
