import React from 'react'
import Header from './components/header/index'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
