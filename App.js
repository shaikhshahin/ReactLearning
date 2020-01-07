import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Blink from './src/blink';
export default class App extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        <View>
          <Blink text="I love to blink" />
          <Blink text="Yes blinking is so great" />
          <Blink text="Why did they ever take this out of HTML" />
          <Blink text="Look at me look at me look at me" />
        </View>
        <View>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigBlue}>just bigBlue</Text>
          <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
          <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
        <View>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
          <View
            style={{width: 150, height: 150, backgroundColor: 'steelblue'}}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
