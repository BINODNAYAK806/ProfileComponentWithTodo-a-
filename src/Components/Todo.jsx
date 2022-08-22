import React from 'react'

export default function Todo() {

    const list = [
        { id: 1, title: "Wake up", status: true },
        { id: 2, title: "drink tea", status: false },
        { id: 3, title: "eat maggi", status: true },
        { id: 4, title: "sleep", status: false }
      ] 
  return (
    <div>
        <h2>TodoList</h2>
        <div>
        {list.map((item)=>{

return <div style={{color:item.status? "green" :"red" ,}} >{item.title}</div>

}
)}
        </div>

    </div>
  )
}
