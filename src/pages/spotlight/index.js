import React from 'react'

import Layout from '../../components/Layout'
import SpotlightRoll from '../../components/SpotlightRoll'

export default class SpotlightIndexPage extends React.Component {
  render() {
    return (
      <Layout>
         <div
          className="center margin-top-2"
          style={{
            marginTop: '5em'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'black',
            }}
          >
            Researcher Spotlight
          </h1>
          <p
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'black',
            }}
          >
            Coming soon!
          </p>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="column is-12">
              <div className="content">
                <SpotlightRoll />
              </div>
              </div>
            </div>
            
          </div>
        </section>
      </Layout>
    )
  }
}
