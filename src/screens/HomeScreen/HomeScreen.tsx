import React from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import useHomeScreenController from '../../screen-controllers/useHomeScreenController';
import styles from './styles';

const HomeScreen = () => {
  const { data, shouldRenderLoadingIndicator, shouldRenderScreenError } = useHomeScreenController();
  const { allEvents } = data;

  if (shouldRenderScreenError) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Error: Unable to load data</Text>
      </ScrollView>
    );
  }

  if (shouldRenderLoadingIndicator) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ActivityIndicator testID="loading-indicator" size="large" />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allEvents.map((event) => (
        <Text key={event.id}>{event.title}</Text>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
