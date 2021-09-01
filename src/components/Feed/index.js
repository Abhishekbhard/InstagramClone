import React from 'react';
import Post from '../Post';

import Stories from '../UserStoriesPreview';

import {FlatList} from 'react-native';

const data = [
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      name: 'beauty',
    },
    imageUri:
      'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      name: 'beauty',
    },
    imageUri:
      'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      name: 'beauty',
    },
    imageUri:
      'https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => (
  <FlatList
    data={data}
    ListHeaderComponent={Stories}
    renderItem={({item}) => <Post post={item} />}
  />
);

export default Feed;
