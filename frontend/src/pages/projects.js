import React from 'react';
import useDeviceDetect from '../hooks/useDeviceDetect';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectListMobile from '../components/ProjectList/ProjectListMobile';

function Works() {
  const { isMobile } = useDeviceDetect();

  return (
    <Layout fullScreen>
      {/* TODO: Hide CustomCursor on touch devices (from the component itself) */}
      <CustomCursor>
        <Header isFixed />
        {isMobile ? <ProjectListMobile /> : <ProjectList />}
      </CustomCursor>
    </Layout>
  );
}

export default Works;
