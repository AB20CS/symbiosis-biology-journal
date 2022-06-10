import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SpotlightRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="grid grid-3">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-12" key={post.id}>
              <article
                className={`spotlight-list-item ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="flex flex-col-around">
                  
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}

                  <p className="post-meta">
                    <span className="subtitle is-block spotlightRollDate">
                      {post.frontmatter.date}
                    </span>
                    
                    <Link
                      className="title has-text-primary is-size-5 spotlightRollTitle"
                      to={post.fields.slug}
                    >
                      {ClipText(post.frontmatter.title, 56)}
                    </Link>
                  </p>

                </header>
                
                <p className="spotlightRollExcerpt flex flex-col-around">
                {ClipText(post.frontmatter.description, 70)}
                </p>
                <Link className="btn" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

const ClipText = (data, length) => {  
  return  data.slice(0, length)+"..."
}

SpotlightRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SpotlightRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "spotlight-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "DD MMM, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1024, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SpotlightRoll data={data} count={count} />}
  />
)