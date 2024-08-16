import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';
export default function CountryDetail() {
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
