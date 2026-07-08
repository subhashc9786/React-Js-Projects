import { useState } from 'react'
import './App.css'


import json from "../data.json";




const List = ({ list, addNodeToList }) => {
  const [isExapnded, setIsExapnded] = useState({});
  console.log(list);
  return (
    <div className='container'>
      {list.map((node) => (
        <div key={node?.id}>
          {node?.isFolder && (
            <span onClick={() => setIsExapnded(prev => ({ ...prev, [node.name]: !prev[node.name] }))}>{isExapnded ? "-" : "+"}</span>
          )}
          <span>{node?.name}</span>
          {node?.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img src="https://cdn-icons-png.flaticon.com/512/3979/3979527.png" alt="icon" className='icon' />
            </span>
          )}
          {isExapnded?.[node?.name] && node?.children && <List list={node.children} />}
        </div>

      ))

      }

    </div>
  )
}
function App() {
  const [data, setData] = useState(json)
  console.log("data", data);
  const addNodeToList = (parentId) => {
    const name = prompt('Enter name');
    console.log(name);
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node, children: [
              ...node.children, { id: Date.now().toString(), name: name, isFolder: true, children: {} }
            ]
          }
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) }
        }
      })
    }
    setData(prev => updateTree(prev))
  }

  return (
    <div className='App'>
      <h1>File Explorer</h1>
      <List list={data} addNodeToList={addNodeToList}></List>
    </div>
  )
}

export default App
