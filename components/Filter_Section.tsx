import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { COLORS, TYPOGRAPHY, FONTS } from '@/constants/uteis';

export default function FilterSection() {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Ionicons name='search' size={16} color={COLORS.WHITE}/>
        <TextInput 
          placeholder='Search for a country...' 
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.filter}
        onPress={()=>{}}
        activeOpacity={0.7}
      >
        <Text style={styles.mode}>Filter by Region</Text>
        <Ionicons name='arrow-down' size={12} color={COLORS.WHITE}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    padding: 40,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    height: 40,
    backgroundColor: COLORS.DARK_BLUE,
    borderRadius: 5,
    paddingLeft: 25,
  },
  input: {
    fontSize: TYPOGRAPHY.BODY_COPY_HOMEPAGE,
    fontFamily: FONTS.FAMILY,
    color: COLORS.WHITE,
    width: '100%',
    height: '100%',
    borderColor: COLORS.DARK_BLUE,
    borderBlockStartColor: COLORS.DARK_BLUE, //
    paddingLeft: 10,
    fontWeight: 200,
  },
  filter: {
    width: '20%',
    height: 40,
    backgroundColor: COLORS.DARK_BLUE,
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
