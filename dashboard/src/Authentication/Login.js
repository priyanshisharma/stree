import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Linke from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import simg from '../assets/singup.jpg'
import {Link,useHistory} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://image.freepik.com/free-vector/breast-cancer-awareness-month_52683-44454.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:" #ff58c9", /* Old browsers */
    background:" -moz-linear-gradient(-45deg,  #ff58c9 33%, #0088e8 100%)", /* FF3.6-15 */
    background: "-webkit-linear-gradient(-45deg,  #ff58c9 33%,#0088e8 100%)", /* Chrome10-25,Safari5.1-6 */
    background: "linear-gradient(135deg,  #ff58c9 33%,#0088e8 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff58c9', endColorstr='#0088e8',GradientType=1 )", /* IE6-9 fallback on horizontal gradient */
    
  },
}));

export default function SignInSide() {
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const history=useHistory()

    const classes = useStyles();
    const loginP=()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in 
                // ...
                console.log("Logged!")
                history.push('/Patient')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    const loginD=()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in 
                // ...
                console.log("Logged!")
                history.push('/Doctor')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginP}
            >
              Log In as Patient
            </Button>
            <div style={{margin:"auto",textAlign:"center"}}>OR</div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginD}
            >
              Log In as Doctor
            </Button>
            <Grid container>
              <Grid item>
                <Linke href="#" variant="body2">
                <Link to="/Signup">
                  {"Don't have an account? Sign up"}
                </Link>
                </Linke>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
