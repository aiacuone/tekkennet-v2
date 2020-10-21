import React, {useState} from 'react'
import Safe from './Safe'
import Unsafe from './Unsafe'




export default function Safety(props) {

    let [safe,setSafe]      =useState(false)
    let [unsafe,setUnsafe]  =useState(false)

    function handleClick(e){
        setSafe     (false)
        setUnsafe   (false)
        e.target.value==='safe'     &&setSafe   (true)
        e.target.value==='unsafe'   &&setUnsafe (true)
    }

    let buttonStyle={
        margin:         '5px',
        borderRadius:   '20px',
        padding:        '10px 20px 10px 20px',
        background:     'none',
        border:         'none',
        backgroundColor:'#e9f1f2'
    }

    let [button1Style,setButton1Style]=useState(buttonStyle)
    let [button2Style,setButton2Style]=useState(buttonStyle)

        function changeButton1Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton1Style(newButton)
        }

        function changeButton2Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton2Style(newButton)
        }

    return (

        <div>
            
            <br/>
            
            <button 
                style={button1Style}
                onMouseEnter={  ()=>changeButton1Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton1Style('#e9f1f2')}  
                onClick={handleClick} 
                value='safe'
            >SAFE    
            </button>
            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton2Style('#e9f1f2')}  
                onClick={handleClick} 
                value='unsafe'
            >UNSAFE  
            </button>

           {safe    &&<Safe     dropDownValue={props.dropDownValue}/>}
           {unsafe  &&<Unsafe   dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}