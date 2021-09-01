import React from 'react';
import {View, FlatList} from 'react-native';

import Story from '../UserStoryPreview';
import styles from './styles';
import stories from '../util/data/stories';

const Stories = () => (
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

export default Stories;
