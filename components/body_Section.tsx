import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { COLORS, TYPOGRAPHY, FONTS } from '@/constants/uteis';
import CardCountry from './card_Country';

export default function BodySection() {
  return (
    <View style={styles.container}>
      <CardCountry 
        name='Angola'
        population={28.77}
        region='Africa'
        capital='Luanda'
        flag='data:image/png;base64,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'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 40,
    marginTop: 20,
  },
});
