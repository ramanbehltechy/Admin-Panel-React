import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from '../../../../assets/images/icons/social-google.svg'
import { RootState } from '../../../../store/reducer';
import { useDispatch } from 'react-redux';
import Login from '../authentication3/Login3';
import { AuthActionTypes, loginAdmin } from '../../../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';


// ============================|| FIREBASE - LOGIN ||============================ //

interface FirebaseLoginProps {
  // Add your prop types here
}

const FirebaseLogin:React.FC<FirebaseLoginProps> = ({ ...others }) => {
  // const dispatch = useDispatch();
  // const dispatch: ThunkDispatch<RootState, undefined, AuthActionTypes> = useDispatch();

  // const dispatch  = useDispatch<ThunkDispatch<RootState, unknown, AuthActionTypes>>();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate=useNavigate();
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state:RootState) => state.customization);
  const {isLoggedIn,data}=useSelector((state:RootState)=>state?.login)
  const [checked, setChecked] = useState(true);

  const googleHandler = async () => {
    console.error('Login');
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
useEffect(()=>{
if(isLoggedIn){
  navigate('/')
}
},[data,isLoggedIn,navigate])

  const handleSubmit = async (values: any, { setErrors, setStatus, setSubmitting }: any) => {
    try {
      //Using redux-thunk
      dispatch(loginAdmin(values.email.trim(), values.password.trim()));
     
      //For Direct Implementation
      // const API_URL = 'http://localhost:5000';
      // const response:AxiosResponse = await axios.post(`${API_URL}/admin/login`, {
      //   email: values.email.trim(),
      //   password: values.password.trim(),
      // }); 

      // if (response.status === 200) {
      
      // } else {
      //   setErrors({ submit: 'Login failed. Please check your credentials.' });
      // }

      // setStatus({ success: true });
      // setSubmitting(false);
    } catch (error) {
      console.error(error);
      if (scriptedRef.current) {
        setStatus({ success: false });
        setErrors({ submit: 'An error occurred while logging in.' });
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton offset={10}>
            <Button
              disableElevation
              fullWidth
              onClick={googleHandler}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign in with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign in with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: 'info@codedthemes.com',
          password: '123456',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={handleSubmit}
        // onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        //   try {
        //     // if (scriptedRef.current) {
        //     //   setStatus({ success: true });
        //     //   setSubmitting(false);
        //     // }

        //   } catch (err:any) {
        //     console.error(err);
        //     if (scriptedRef.current) {
        //       setStatus({ success: false });
        //       setErrors({ submit: err.message });
        //       setSubmitting(false);
        //     }
        //   }
        // }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} 
            //sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} 
            //sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                 onChange={handleChange}
               
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label="Remember me"
              />
              <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                Forgot Password?
              </Typography>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton offset={10}>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Sign in
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
