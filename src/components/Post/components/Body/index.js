import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
const Body = ({imageUri}) => (
  <Image style={styles.image} source={{uri: imageUri}} />
);
export default Body;
