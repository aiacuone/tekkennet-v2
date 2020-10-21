import React, {useState} from 'react'
import SingleString from './SingleString'
import DualString from './DualString'
import TrippleString from './TrippleString'



export default function Strings(props) {

    let [single,setSingle]      =useState(false)
    let [dual,setDual]          =useState(false)
    let [tripple,setTripple]    =useState(false)

    function handleClick(e){
        setSingle   (false)
        setDual     (false)
        setTripple  (false)
        e.target.value==='single'       &&setSingle(true)
        e.target.value==='dual'         &&setDual(true)
        e.target.value==='tripple'      &&setTripple(true)
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
    let [button3Style,setButton3Style]=useState(buttonStyle)

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

        function changeButton3Style(backgroundColor){
            let newButton= {...buttonStyle}
            newButton.backgroundColor=backgroundColor
            setButton3Style(newButton)
        }

    return (

        <div>
            
            <br/>
            
            <button 
                style={button1Style}
                onMouseEnter={  ()=>changeButton1Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton1Style('#e9f1f2')} 
                onClick={handleClick} 
                value='single'
            >SINGLE    
            </button>

            <button 
                style={button2Style}
                onMouseEnter={  ()=>changeButton2Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton2Style('#e9f1f2')} 
                onClick={handleClick} 
                value='dual'
            >DUAL            
            </button>

            <button 
                style={button3Style}
                onMouseEnter={  ()=>changeButton3Style('#f0f4f5')}
                onMouseOut={    ()=>changeButton3Style('#e9f1f2')} 
                onClick={handleClick} 
                value='tripple'
            >TRIPPLE         
            </button>

           {single  &&<SingleString     dropDownValue={props.dropDownValue}/>}
           {dual    &&<DualString       dropDownValue={props.dropDownValue}/>}
           {tripple &&<TrippleString    dropDownValue={props.dropDownValue}/>}

        </div>
        
    )
}
