import React, {useState}    from 'react'
import SpecificHeight       from './SpecificHeight'
import StartNFinish         from './StartNFinish'




export default function Height(props) {

    let [specificHeight,setSpecificHeight]  =useState(false)
    let [startNFinish,setStartNFinish]      =useState(false)

    function handleClick(e){
        setSpecificHeight   (false)
        setStartNFinish     (false)
        e.target.value==='specificHeight'   &&setSpecificHeight(true)
        e.target.value==='startNFinish'     &&setStartNFinish  (true)
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
                value='specificHeight'
            >SPECIFIC HEIGHT  
            </button>

            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton2Style('#e9f1f2')} 
                onClick={handleClick} 
                value='startNFinish'
            >START AND FINISH 
            </button>

            {specificHeight &&<SpecificHeight   dropDownValue={props.dropDownValue}/>}
            {startNFinish   &&<StartNFinish     dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}
