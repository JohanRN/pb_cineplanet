import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Card } from './features/card/card'
/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
      <Card />
    </Provider>
  )
}

export default App
