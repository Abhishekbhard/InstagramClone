import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({story}) => {
  const {
    user: {id, imageUri, name},
  } = story;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Story;
