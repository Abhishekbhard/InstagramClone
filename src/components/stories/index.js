import React from 'react';
import {View, FlatList} from 'react-native';

import Story from '../story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    name: '22 m',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '24 m',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '28 m',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '29 m',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '2500 m',
  },
  {
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '250 m',
  },
];

const Stories = () => (
  <View style={styles.container}>
    <FlatList
      data={data}
      horizontal
      keyExtractor={({name}) => name}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  </View>
);

export default Stories;
