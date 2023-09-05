import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase ,Typography} from '@mui/material';

// project imports
import LogoSection from '../LogoSection';

import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
 import { IconMenu2 } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header :React.FC<{ handleLeftDrawerToggle: () => void }>= ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const {isLoggedIn,data}=useSelector((state:RootState)=>state?.login)
  
  

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
          
        </Box>
        <Box>
        </Box>
       
      
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              // ...theme.typography.commonAvatar,
              // ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      

      {/* notification & profile */}
      <NotificationSection />
     { isLoggedIn && <ProfileSection />}
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func.isRequired
};

export default Header;
