import React from 'react';
import {View} from 'react-native';

import Body from './components/Body';
import Footer from './components/Footer';

import Header from './components/Header';
const Post = ({post}) => (
  <View>
    <Header imageUri={post.image} name={post.name} />
    <Body imageUri={post.image} />
    <Footer
      caption={post.caption}
      likesCount={post.likes}
      postedAt={post.createdAt}
    />
  </View>
);
export default Post;
