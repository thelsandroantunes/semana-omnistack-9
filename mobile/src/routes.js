import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login'
import List from './pages/List'
import Book from './pages/Book'
import Teste from './pages/Teste'
import TesteBook from './pages/TesteBook'


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book,
        Teste,
        TesteBook
    })
);

export default Routes;