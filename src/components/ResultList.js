import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ResultList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
