import React from 'react';
import useDeviceDetect from '../hooks/useDeviceDetect';
import Layout from '../components/layout';
import Header from '../components/Header/Header';
import NavLink from '../components/NavLink/NavLink';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectListMobile from '../components/ProjectList/ProjectListMobile';

// TODO: Add the X icon and change label's proptype to accept nodes
function Works() {
  const { isTouchOnly } = useDeviceDetect();
  return (
    <Layout fullScreen>
      {/* TODO: Hide CustomCursor on touch devices (from the component itself) */}
      <CustomCursor>
        <Header
          isFixed
          navItems={<NavLink to="/" isPositionedFixed label="Close" />}
        />
        {isTouchOnly ? <ProjectListMobile /> : <ProjectList />}
      </CustomCursor>
    </Layout>
  );
}

export default Works;
