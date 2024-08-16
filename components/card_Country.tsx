import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text, ImageBackgroundProps,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { COLORS, TYPOGRAPHY, FONTS } from '@/constants/uteis';

interface cardCountryProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}
export default function CardCountry({name,population,region,capital,flag}:cardCountryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Image source={{uri: flag}} style={styles.flag}/>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.item}>
          <Text style={styles.info}>Population: </Text>
          <Text style={styles.infoResult}>{population.toLocaleString()} people</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.info}>Region: </Text>
          <Text style={styles.infoResult}>{region}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.info}>Capital: </Text>
          <Text style={styles.infoResult}>{capital}</Text>
        </View>
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 350,
    backgroundColor: COLORS.DARK_BLUE,
  },
  flagContainer: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.WHITE,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  item :{
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,

  },
  name: {
    fontSize: TYPOGRAPHY.BODY_COPY_HOMEPAGE_TITLE,
    fontFamily: FONTS.FAMILY,
    color: COLORS.WHITE,
    fontWeight: 700,
    marginBottom: 10,
  },
  info: {
    fontSize: TYPOGRAPHY.BODY_COPY_HOMEPAGE,
    fontFamily: FONTS.FAMILY,
    color: COLORS.WHITE,
    fontWeight: 500
  },
  infoResult: {
    fontSize: TYPOGRAPHY.BODY_COPY_HOMEPAGE,
    fontFamily: FONTS.FAMILY,
    color: COLORS.WHITE,
    fontWeight: 300
  },


});
