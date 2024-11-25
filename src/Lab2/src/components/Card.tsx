import React, { PropsWithChildren, memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FlatList, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Character } from '../../App';

interface CardProps extends PropsWithChildren<{}> {
  color?: string;
  index: number;
  limit: number;
  flatListRef: React.MutableRefObject<FlatList<Character> | null>;
}

const screenHeight = Dimensions.get('window').height;

const Card = memo(({ children, limit, color = 'coral', index, flatListRef }: CardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  const scrollToIndex = (toIndex: number) => {
    if (toIndex >= 0 && toIndex < limit) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: toIndex,
      });
    }
  };

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    translateX.value = event.nativeEvent.translationX;
    translateY.value = event.nativeEvent.translationY;
  };

  const onGestureEnd = () => {
    if (translateY.value > 150) {
      scrollToIndex(index - 1);
    } else if (translateY.value < -150) {
      scrollToIndex(index + 1);
    }
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
      <View style={styles.container}>
        <Animated.View style={[styles.card, animatedStyle, { backgroundColor: color }]}>
          {children}
        </Animated.View>
      </View>
    </PanGestureHandler>
  );
});

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
