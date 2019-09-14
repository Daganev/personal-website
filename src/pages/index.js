import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Hero } from '../components/hero/hero'
import Contact from '../components/contact/contact'
import Blog from '../components/blog';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Hero />
      <Blog posts={edges} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } },
  sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        excerpt(pruneLength: 240)
        frontmatter {
          title
          tags
          date
        }
        fields {
          slug
        }
      }
    }
  }
}
`

export default IndexPage
