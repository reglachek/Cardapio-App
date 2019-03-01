import { createBottomTabNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from './src/components/HomeScreen'
import ContatoScreen from './src/components/ContatoScreen'
import HorariosScreen from './src/components/HorariosScreen'
import SobreScreen from './src/components/SobreScreen'

const Navigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Contato: {
    screen: ContatoScreen
  },
  Horarios: {
    screen: HorariosScreen
  },
  Sobre: {
    screen: SobreScreen
  }
})

export default createAppContainer(Navigator)
