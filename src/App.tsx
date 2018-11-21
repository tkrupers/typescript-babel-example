import {hot} from 'react-hot-loader'
import * as React from 'react'
import Counter from './Counter'

export interface AppProps {
  test: number;
}

const App: React.SFC<AppProps> = ({test}) => (
  <div>
    <h1>Hello, world....{test}</ h1>
    <Counter/>
  </div>
);

export default hot(module)(App)