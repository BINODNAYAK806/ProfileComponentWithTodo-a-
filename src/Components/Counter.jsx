import React from 'react'

export default function Counter() {

    const [count,setcount] = React.useState(1)


    const handleinc =(val)=>{

       setcount(count+val) 


    }
    const handledec =(val)=>{
        if(count >0){
        setcount(count-val) 
    }
 
     }
     const handledou =(val)=>{

        setcount(count*val) 
 
 
     }



  return (
    <div>

    <h1 style={{color:count%2===0 ? "green" :"red"}}>{count}</h1>
    <button onClick={()=>{ handleinc(1)}} >inc</button>
    <button onClick={()=>{ handledec(1)}}>dec</button>
    <button onClick={()=>{handledou(2)}}>double</button>

    </div>
  )
}
