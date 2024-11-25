import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

interface CustomImageProps {
  uri: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ uri }) => {
  const onError = () => {
    // Handle error here
    console.log('Error loading image');
  };

  return (
    <FastImage
      style={styles.image}
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
      onError={onError}
    />
  );
};

CustomImage.propTypes = {
  uri: PropTypes.string.isRequired,
};

CustomImage.defaultProps = {
  uri: 'https://example.com/default-image.jpg',
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default CustomImage;
