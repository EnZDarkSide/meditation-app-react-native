import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChooseTopicScreen } from './components/choose_topic';
import {View} from 'react-native';
import * as Font from 'expo-font';
import { WelcomeScreen } from './components/welcome';
import { RemindersScreen } from './components/reminders';

const Stack = createStackNavigator();

export default class App extends React.Component {

  state = {
      assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'HelveticaNeueCyr-Bold': require('./assets/fonts/HelveticaNeueCyr-Bold.ttf'),
      'HelveticaNeueCyr-Light': require('./assets/fonts/HelveticaNeueCyr-Light.ttf'),
      'HelveticaNeueCyr-Thin': require('./assets/fonts/HelveticaNeueCyr-Thin.ttf'),
      'HelveticaNeueCyr-Medium': require('./assets/fonts/HelveticaNeueCyr-Medium.ttf')
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
      const {assetsLoaded} = this.state;

      if( assetsLoaded ) {
          return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                  headerShown: false,
                }}/>
                <Stack.Screen name="ChooseTopicScreen" component={ChooseTopicScreen} options={{
                  headerShown: false,
                }}/>
                <Stack.Screen name="Reminders" component={RemindersScreen} options={{
                  headerShown: false,
                }}/>
              </Stack.Navigator>
            </NavigationContainer>
          );
      }
      else {
          return (
              <View>
              </View>
          );
      }
  }
}
