import React from 'react';
import {View, FlatList} from 'react-native';

import Story from '../story';
import styles from './styles';

const data = [
  {
    id: 1,
    imageUri:
      'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    name: '22 m',
  },
  {
    id: 2,
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '24 m',
  },
  {
    id: 3,
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '28 m',
  },
  {
    id: 4,
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '29 m',
  },
  {
    id: 5,
    imageUri:
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    name: '2500 m',
  },
  {
    id: 6,
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
      keyExtractor={({id}) => id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  </View>
);

export default Stories;
