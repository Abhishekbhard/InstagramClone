import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({imageUri, name}) => (
  <View style={styles.container}>
    <ProfilePicture uri={imageUri} />
    <Text style={styles.text}>{name}</Text>
  </View>
);
export default Story;
