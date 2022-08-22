import React from 'react'
import styles from "./Profile.module.css"
import Det from './Det';
export default function Profile() {

    const [age,setage] = React.useState(19);
    const [cond,setcond] = React.useState("show more detalis");
    const [flag,setflag] = React.useState(false)
    
    const inc=(val)=>{
        
        setage(age+val)
    
    }

    const show=()=>{

        if(flag===false){
            setflag(true)

        setcond(" hide more detalis")

        
        }
        else{
            setflag(false)

            setcond(" show more detalis") 

        }
        
        
        
    }
    


  return (
    <div className={styles.main}>

    <img className={styles.img} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
    <h2>Name: Binod Nayak</h2>
    <h3>Age:{age}</h3>
        <div>
        <button onClick={()=>{inc(1)}} >inc age</button>
        <button onClick={()=>{inc(-1)}}>dec age</button>
        <button onClick={show} >{cond}</button>
        <div > {
        (flag)
          ? <div> <Det/> </div> 
          : <div>  </div> }</div>   
        </div>

        
    

    </div>
  )
}
