import React from 'react'
import Singlecard from './Singlecard'
import './homepage.css'
import { useState } from 'react';
// import { useEffect } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';





const useStyles = makeStyles({
    root:{
        marginTop:50,
        backgroundColor: 'white',
        display:'flex',
        flexDirection: 'column',
    },
    paper:{
        padding:10,
        paddingBottom:20,
        border:"1px solid black" 
    },
  title: {
      marginTop:20,
    fontFamily: 'Monospace',
  },
  field: {
    width: 350,
  }
});


export default function Homepage() {

    const [notes,setnote] = useState([]);
    const [value, setvalue] = useState('');


    const handleclick = (e) =>{
        e.preventDefault();
        setvalue(e.target.value);
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        
        setnote([...notes,{value: value,id : Math.floor(Math.random()*10000)}]);
        setvalue('');
    }

    const handledelete = (id) => {
        let newnote = notes.filter((note) => note.id !== id);
        setnote(newnote);
    }

    const handleupdate = (e,id,Name,edit,setEdit) => {
      e.preventDefault();
      console.log(Name,edit);
      const updateTodo = notes.map((note) => note.id === id ? {...note, value : Name} : note);
      console.log('update todo =');
      console.log(updateTodo);
      setnote(updateTodo);
      setEdit(!edit);
  }

    const classes = useStyles();

    return (
        
        <Container className={classes.root} >
            {/* <h1>{value}</h1> */}

            
            {/* <Grid container spacing={8}> */}
                <form action="" onSubmit={handlesubmit}>
                    <Grid  container spacing={3}>
                        <Grid item xs={0} md={3}/>
                        <Grid item xs={6} >
                            <Paper elevation={0} >
                                <Typography className={classes.title} variant="h6" color="primary"  align="center" fontFamily= "Monospace" fontStyle="italic" >What's the plan for today?</Typography>
                            </Paper>
                        </Grid> 
                        <Grid item xs={3} />
                        <Grid item xs={0} md={3}/>
                        <Grid item xs={2.5} >
                        <Paper>
                             <TextField 
                            inputProps={{ style: { fontFamily: 'Arial', color: 'black'}}}  
                            color="" 
                            className={classes.field}  
                            label="Enter the task" 
                            variant='outlined' 
                            required 
                            type="text" 
                            value={value}  onChange={handleclick}/>
                        </Paper>
                       </Grid>
                        {/* <Grid item xs={0.5}/> */}
                       <Grid item xs={1.5} >
                            <Paper>
                                <Button  type="submit" variant="outlined" color="primary" className={classes.btn-1} endIcon={<ChevronRightOutlinedIcon />} >submit</Button>   
                            </Paper> 
                       </Grid>
                       <Grid item xs={0.5} md={0.5}>
                            <Paper>
                                <Button type="submit" color="secondary" variant="outlined" className={classes.btn}  startIcon={<DeleteSweepOutlinedIcon/> } onClick={() => setnote([])}></Button>
                            </Paper> 
                       </Grid>
                        
                    </Grid>    
                        {/* <label htmlFor="">What's the plan for today?</label> */}
                        {/* <input type="text" value={value}  onChange={handleclick}/> */}
                        {/* <button>submit</button> */}

                </form>
            

        
            {/* <Grid container > */}
            {/* <Grid item xs={12}/> */}
            {/* </Grid> */}

            <div className="new"></div>
        <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            >
            {notes.map((note) => {
                console.log(note);
                return(
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Singlecard  id={note.id} value={note.value} handledelete={handledelete}  handleclick={handleclick}   handleupdate={handleupdate}/>
                            </Paper>
                        </Grid>
                )
            })}

        </Grid>
        {/* </Grid> */}

        </Container>
    )
}
