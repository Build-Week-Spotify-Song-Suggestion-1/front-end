// import React from "react";
// import { Button, TextField, Container, Typography } from "@material-ui/core"

// // import { useDispatch, useSelector } from "react-redux";
// import { signUp } from "../../redux/actions";
// import useStyles from "../../utilities/Styles";
// import { useHistory, Redirect } from "react-router";



// export default function SignUp() {
//     //hooks
//     // const dispatch = useDispatch()
//     const classes = useStyles();
//     const history = useHistory()


//     //initial state for form
//     const init = {
//         firstName: '',
//         lastName: '',
//         username: '',
//         password: ''
//     }

   
//     //component state
//     const [formState, errors, inputChange, formSubmit] = useFormValidation(init, formSchema, () => {
//         dispatch(signUp(formState, () => history.push('/user')))
//     })

//     //redux state
//     // const submitError = useSelector(state => state.error)







   
//     //redirect if token exists
//     if (localStorage.getItem('token')) {
//         return <Redirect to='/user' />
//     }

//     return (
//         <Container component="main" maxWidth="xs">
//             <div className={classes.paper}>
//                 <Typography component="h1" variant="h5">
//                     Sign in
//                 </Typography>
//                 <form className={classes.form} noValidate autoComplete="off" onSubmit={formSubmit} name="form">

//                     <TextField
//                         id="outlined-basic"
//                         error={errors.firstName}
//                         label="First Name"
//                         helperText={errors.firstName}
//                         variant="outlined"
//                         value={formState.firstName}
//                         onChange={inputChange}
//                         name={'firstName'}
//                         fullWidth
//                     />
//                     <TextField
//                         id="outlined-basic"
//                         error={errors.firstName}
//                         label="Last Name"
//                         helperText={errors.lastName}
//                         variant="outlined"
//                         value={formState.lastName}
//                         onChange={inputChange}
//                         name={'lastName'}
//                         fullWidth
//                     />
//                     <TextField
//                         id="outlined-basic"
//                         error={errors.username}
//                         label="Username"
//                         helperText={errors.username}
//                         variant="outlined"
//                         value={formState.username}
//                         onChange={inputChange}
//                         name={'username'}
//                         fullWidth
//                     />
//                     <TextField
//                         id="outlined-basic"
//                         error={errors.password}
//                         label="Password"
//                         helperText={errors.password}
//                         variant="outlined"
//                         value={formState.password}
//                         onChange={inputChange}
//                         name={'password'}
//                         fullWidth
//                     />
//                     <div className={classes.submit}>
//                         <Button variant="contained" color="primary" disableElevation onClick={formSubmit}>
//                             Submit
//                 </Button>
//                     </div>
//                     {/* {submitError && <div>{submitError}</div>} */}
//                 </form>
//             </div>
//         </Container>
//     );
// }
