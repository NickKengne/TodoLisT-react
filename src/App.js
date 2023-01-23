import React , {useState} from 'react'
import Header from  './components/header/Header'
import Card from './components/card/Card'
import '../node_modules/bulma/css/bulma.min.css'
import './App.css'

export default function App() {
  
  const [monState , setState] = useState([])
  const [tache, setTache] = useState()
  const [description, setDescription] = useState()

    function creationTache(e) {
      e.preventDefault()
      const newTab = [...monState, {tache : tache, description : description}]
      setState(newTab)
      setTache('')
      setDescription('')
    }

    function deleteTache(index)
    {
      const tabClean = [...monState]
      const nvtab = tabClean.filter((item) => tabClean.indexOf(item) !== tabClean.indexOf(tabClean[index]))
      setState(nvtab)
      
    }
  return (
    <div>
      <Header />
      <div className="container px-3">
        <h2 className="title mt-5 is-4" >
          Rentrez vos tâches Journalières :
        </h2>

        <form onSubmit={creationTache}>
        <div className="field mt-4">
          <div className="control">
            <label htmlFor="tache" className="label">
              Tâche :
            </label>
              <input 
              type="text" 
              id='tache' 
              className="input"
              placeholder='Une tâche à faire'
              onChange={e => setTache(e.target.value)} 
              value={tache}
               />
          </div>
        </div>
        <div className="field mt-4">
          <div className="control">
            <label htmlFor="description" className="label">
              Description :
            </label>
              <textarea  
              id='description'
              className='textarea'
              onChange={e => setDescription(e.target.value)}
              value = {description}
              ></textarea> 
          </div>
        </div>  
        <div className="control">
          <button type='submit' className="button is-link">
            Créer une tâche
          </button>
        </div>
        </form>

        {
          monState.map((todo, index) => (
            <Card
              key = {index}
              index = {index}
              tache = {todo.tache}
              description = {todo.description}
              deleteTache = {deleteTache}
            />
          ))
        }

      </div>
    </div>
  )
}


