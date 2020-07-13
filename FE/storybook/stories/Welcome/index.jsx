import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function Welcome() {
  return (
    <View style={style.wrapper}>
      <Text style={style.header}>Welcome to React Native Storybook</Text>
      <Text style={style.content}>
        This is a UI Component development environment for your React Native app. Here you can
        display and interact with your UI components as stories. A story is a single state of one
        or more UI components. You can have as many stories as you want. In other words a story is
        like a visual test case.
      </Text>
      <Text style={style.content}>
        We have added some stories inside the &quot;storybook/stories&quot; directory for
        examples.
        Try editing the &quot;storybook/stories/Welcome.js&quot; file to edit this message.
      </Text>
    </View>
  );
}
