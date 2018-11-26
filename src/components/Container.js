import {Easing, Animated} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home';
import AboutScreen from './About';

const Container = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        About: {screen: AboutScreen},
    },
    {
        headerMode: 'none',
        transitionConfig : () => ({
            transitionSpec: {
              duration: 0,
              timing: Animated.timing,
              easing: Easing.step0
            }
        })
    }
)


export default createAppContainer(Container);
