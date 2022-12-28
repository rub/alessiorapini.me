import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import CustomCursor from "../components/CustomCursor/CustomCursor"
import ProjectList from "../components/ProjectList/ProjectList"

export default Works = () => (
  <Layout fullScreen>
    <CustomCursor>
      <Header isFixed />
      <ProjectList />
    </CustomCursor>
  </Layout>
)
