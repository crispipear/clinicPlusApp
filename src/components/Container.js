import {Easing, Animated} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home';
import ScheduleScreen from './Schedule';

const Container = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        Schedule: {screen: ScheduleScreen}
    },
    {
        headerMode: 'none',
        // transitionConfig : () => ({
        //     transitionSpec: {
        //       duration: 0,
        //       timing: Animated.timing,
        //       easing: Easing.step0
        //     }
        // })
    }
)


export default createAppContainer(Container);
