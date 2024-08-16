import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

import Header from '@/components/header';
import FilterSection from '@/components/Filter_Section';
import BodySection from '@/components/body_Section';

import { COLORS } from '@/constants/uteis';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <FilterSection />
      <BodySection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.VERY_DARK_BLUE_BG,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
