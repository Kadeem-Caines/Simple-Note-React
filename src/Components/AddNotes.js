import React, {useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Notes.css';

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

function AddNotes(){

    const [note, setNote] = useState([]);
    const [search,setSearch]=useState(0);


    function alertNewNoteAdded(){

        
         
        var result=document.getElementById("test").value;
        var result2=document.getElementById("start").value;
        var result3=document.getElementById("fname").value;


        setNote([...note,{id: note.length,value:result, date:result2, title:result3}]);
     
            alert("Your Note was submitted");

            setSearch(search+1);
     
    }

    
    function addNewNote(){

        return note.map(note=>(<div className="template" style={{backgroundColor:randomColor}} key={note.id}><h5 style={{textAlign:"center"}}>{note.title}:</h5> 
        
        <h5 style={{textAlign:"center"}}>{note.date}:</h5>{note.value}</div>))

   }
    

      return (

        <div>
                
            <form>

            <input type="date" id="start" name="trip-start"></input>

            <input type="text" className="title" id="fname" name="fname" placeholder="Title"></input>

            <textarea id="test" className="box" rows="4" cols="50">Your stories start here...</textarea>


            <Button variant="primary" className="save" onClick={alertNewNoteAdded}>Save</Button>
            
            <br/>

            <br/>
            
             {search > 0 && <p style={{textAlign:"center"}}> You currently have {search} notes showing</p>}

             <br/>

            
            
            <div className="noteContainer">

             {addNewNote()}
           
            </div>

            </form>    

        </div>
        
    );

   
         
}

export default AddNotes;

