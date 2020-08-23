import React from "react"
import Axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [data, setData] = React.useState("")

  React.useEffect(() => {
    console.log(process.env.API_URL)
  })

  const fetchapi = async ( e ) => {
    const { value } = e.target
    const { data } = await Axios.get(process.env.API_URL + value)
    
    if (data && Array.isArray(data)) {
      let temp = ''
      data.forEach(data => {
        temp += JSON.stringify(data)
      });

      setData(temp)
    }
  }
  return (
    <Layout>
      <SEO title="Home" />
      <input
        type="text"
        placeholder="place url"
        onChange={fetchapi}
      />
      <p>
        {data ? data : ""}
      </p>
    </Layout>
  )
}

export default IndexPage
