import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { COLORS, TYPOGRAPHY, FONTS } from '@/constants/uteis';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where in the World?</Text>
      <TouchableOpacity
        style={styles.modeButton}
        onPress={()=>{}}
        activeOpacity={0.7}
      >
        <Ionicons name='moon-sharp' size={12} color={COLORS.WHITE}/>
        <Text style={styles.mode}>Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: COLORS.DARK_BLUE,
    padding: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: TYPOGRAPHY.BODY_COPY_HOMEPAGE,
    fontFamily: FONTS.FAMILY,
    fontWeight: 800,
    color: COLORS.WHITE,
  },
  modeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  mode: {
    fontSize: TYPOGRAPHY.BODY_COPY_HOMEPAGE_MODE,
    fontFamily: FONTS.FAMILY,
    fontWeight: 700,
    color: COLORS.WHITE,
  },
});
