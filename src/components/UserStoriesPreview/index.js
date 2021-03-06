import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import {API, graphqlOperation} from 'aws-amplify';

import {listStories} from '../../graphql/queries';

import Story from '../UserStoryPreview';
import styles from './styles';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStories));
      console.log(storiesData.data.listStories.items);
      setStories(storiesData.data.listStories.items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FlatList
      data={stories}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <Story story={item} />}
    />
  );
};

export default Stories;
