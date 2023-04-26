import { createAppContainer } from 'react-navigation'
// import * as React from "react"
// import { NavigationContainer } from "@react-navigation/native"
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
      title: 'Restaurant Search',
    },
  }
)

// alternative navigation setup
// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   )
// }

export default createAppContainer(navigator)
