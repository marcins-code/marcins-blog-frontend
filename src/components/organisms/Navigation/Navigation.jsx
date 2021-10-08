import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import TopMenu from '../../molecules/TopMenu/TopMenu';
import SidebarMenu from '../../molecules/SidebarMenu/SidebarMenu';
import { AppSettingsContext } from '../../../context';
import MobileNavigation from '../../molecules/MobileNavigation/MobileNavigation';
import Backdrop from '../../atoms/Backdrop/Backdrop';
import { PanelToggleButtonLeft } from '../../molecules/Button/PanelToggleButton';
import IconIcomoon from '../../atoms/IconIcomoon/IconIcomoon';

const StyledNavigationWrapper = styled.div`
  position: fixed;
  z-index: 1000;
`;
// const ShowMenuButton = styled(PanelToggleButtonLeft)`
//   left: -5px !important;
//   border-radius: 0 10px 10px 0;
//   color: ${({ theme }) => theme.blue};
//   width: 50px;
// `;

const Navigation = () => {
  const appContext = useContext(AppSettingsContext);
  const nodeRef = useRef(null);
  const buttonRef = useRef(null);
  const { isMobile } = appContext;
  const [showMobileNav, setShowMobileNav] = useState(false);
  return !isMobile ? (
    <>
      <TopMenu />
      <SidebarMenu />
    </>
  ) : (
    <>
      <CSSTransition
        in={!showMobileNav}
        mountOnEnter
        unmountOnExit
        timeout={700}
        classNames="menu-button"
        nodeRef={buttonRef}
      >
        <PanelToggleButtonLeft
          onClick={() => setShowMobileNav(true)}
          ref={buttonRef}
          data-testid="mobile-navigation-toggle-button"
        >
          <IconIcomoon iconName="th-menu-outline" iconSize="3x" />
        </PanelToggleButtonLeft>
      </CSSTransition>
      <Backdrop onClick={() => setShowMobileNav(false)} backdropShow={showMobileNav} />
      <CSSTransition
        in={showMobileNav}
        mountOnEnter
        unmountOnExit
        timeout={700}
        classNames={{ enter: 'mobile-slide-in-left', exit: 'slide-out-left' }}
        nodeRef={nodeRef}
      >
        <StyledNavigationWrapper ref={nodeRef}>
          <MobileNavigation />
        </StyledNavigationWrapper>
      </CSSTransition>
    </>
  );
};
export default Navigation;
