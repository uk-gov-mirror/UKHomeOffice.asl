const React = require('react');
const Layout = require('./layouts/default');

const Page = require('./pages/search');

class Places extends React.Component {
  render() {
    return <Layout {...this.props}
      crumbs={['Licensed premises']}
      scripts={['/public/js/pages/search.js']}
      exposes={Object.keys(Page.propTypes)}
      >
      <Page {...this.props} />
    </Layout>
  }
}

module.exports = Places;