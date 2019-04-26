import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
      precision: 2,
      inputLength: 100,
    };
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <TextInput 
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus
            multiline={true}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid={'transparent'}
            style={{ minHeight: 40, borderColor: 'gray', borderWidth: 1, marginTop:30}}        
          />
          </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
