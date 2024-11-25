import React from 'react';
import { View, Text, Image, StyleSheet, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface AvatarProps {
  name: string;
  greeting: string;
  imageUrl: string;
  size?: number;

  style?: {

    container?: StyleProp<ViewStyle>;
    avatar?: StyleProp<ImageStyle>;
    textContainer?: StyleProp<ViewStyle>;
    greeting?: StyleProp<TextStyle>;
    name?: StyleProp<TextStyle>;
    
  };
}

const Avatar: React.FC<AvatarProps> = ({ name, greeting, imageUrl, size = 60, style }) => {
  return (
    <View style={[styles.container, style?.container]}>
      <Image 
        source={{ uri: imageUrl }} 
        style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }, style?.avatar]} 
      />
      <View style={[styles.textContainer, style?.textContainer]}>
        <Text style={[styles.greeting, style?.greeting , style?.greeting]}>{greeting}</Text>
        <Text style={[styles.name, style?.name]}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
     justifyContent : 'center',
    padding: 10,
    marginTop: 30,
    width: 320 ,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    margin: 10,
  },
  avatar: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    color: '#888',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Avatar;
