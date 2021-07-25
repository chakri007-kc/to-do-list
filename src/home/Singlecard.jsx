import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //   borderRadius:0,
      outline:"none",
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btn:{
      color:"green"
  },
  edit:{
    width:350,
    // color:"pink"
  },
  btn1:{
    //   marginTop:10
  }
}));



export default function Singlecard(props) {
    const classes = useStyles();


    const [form,setform] = useState(false);
    const [name,setName] = useState(props.value);
    useEffect(() => {
        console.log('render');
    }, [form])


         const Showform = (id,value) => {
            // setName(props.value)
        return(
            <>
            <form action="" onSubmit={(e) => props.handleupdate(e,id,name,form,setform)}>
                <Grid container spacing={3}>
                <Grid item xs={7.5} >
                    <Paper>
                        <TextField className={classes.edit} label="Edit" variant='outlined' type="text" value={name}   onChange={(e) => setName(e.target.value)} />
                    </Paper>
                </Grid>
                <Grid item xs={1.5} >
                    <Paper>
                        <Button  type="submit" variant="outlined" color="primary" className={classes.btn1} >submit</Button> 
                    </Paper>
                </Grid>
                </Grid>

                {/* <label htmlFor="">Edit:</label> */}
                {/* <input type="text"  value={name}   onChange={(e) => setName(e.target.value)}/> */}

            </form>
        </>)
        }

    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={8} >
                    <Paper className={classes.paper} elevation={0}> 
                        <h2 key={props.id}>{props.value}</h2>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={2} lg={3}/>
                <Grid item xs={0.8}>
                    <Paper>
                        {/* <button onClick={() => props.handledelete(props.id)}>Delete</button> */}
                        <Button  color="secondary" variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}  onClick={() => props.handledelete(props.id) } > </Button>
                    </Paper>
                </Grid>
                 <Grid item xs={6} >
                    <Paper elevation={0}>
                        {form ? Showform(props.id,props.value) : <Button variant="outlined" className={classes.btn} startIcon={<EditOutlinedIcon/>} onClick={() => setform(!form) } >Edit</Button>}
                    </Paper>
                </Grid>
                 
            </Grid>

        </Container>
    )
}
