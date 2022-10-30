import logo from 'assets/images/logo.png';
import { styled, useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Image = styled('img')({
  padding: '4px 8px'
});

const Logo = () => {
  const theme = useTheme();

  return <Image src={logo} alt="logo" />;
};

export default Logo;
