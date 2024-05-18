import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const as = () => {
  const navigaton = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigaton.navigate('caro' as never)}>
        <Text>hi</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default as;

const styles = StyleSheet.create({});
