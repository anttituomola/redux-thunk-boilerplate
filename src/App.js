import './App.css'
import { useEffect } from "react"
import { fetchData } from './components/fetchData'
import { useDispatch } from 'react-redux'
import { Users } from './components/Users'


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Fetch data with thunk</h1>
      <Users />
    </div>
  );
}

export default App;
