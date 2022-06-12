import { useEffect, useState } from 'react';
import logo from '../../assets/images/Logo.png';
import { Steppers } from '../Steps/Steppers';
import { Logo, LogoDiv } from './LogoHomeStyles';

export const LogoHome = () => {
  const [loadingLogo, setLoadingLogo] = useState(true);

  const TimerSteps = () => {
    setTimeout(() => {
      setLoadingLogo(false);
    }, 3000);
  }

  useEffect(() => {
    TimerSteps();
  }, [])

  return (
    <>
      {
        loadingLogo ?
          <LogoDiv>
            <Logo src={logo} alt="logo" />
          </LogoDiv>
          :
          <Steppers />
      }
    </>
  );
}