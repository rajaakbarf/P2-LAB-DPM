import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TugasP2 = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>5 - 0
      </Text>
      <Text style={styles.text}>Marcelino('5','16','26','66','78')
      </Text>

      
      <View style={styles.boxContainer}>
        
        <View style={styles.box1}>
          <View style={styles.halfRed} />
          <View style={styles.halfWhite} />
        </View>

        
        <View style={styles.box2}>
          <View style={styles.halfBlack} />
          <View style={styles.halfRed} />
          <View style={styles.halfYellow} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', 
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '80%', 
  },
  box1: {
    width: 100,
    height: 100,
    flexDirection: 'column', 
  },
  halfRed: {
    flex: 1, 
    backgroundColor: 'red', 
  },
  halfWhite: {
    flex: 1, 
    backgroundColor: 'white', 
  },
  box2: {
    width: 100,
    height: 100,
    flexDirection: 'column', 
  },
  halfBlack: {
    flex: 1, 
    backgroundColor: 'black', 
  },
  halfRed: {
    flex: 1, 
    backgroundColor: 'red', 
  },
  halfYellow: {
    flex: 1, 
    backgroundColor: 'yellow', 
  },
  
});

export default TugasP2;
