import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import SelectedViewScreen from './src/screens/SelectedViewScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Selected: SelectedViewScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
)

export default createAppContainer(navigator)
