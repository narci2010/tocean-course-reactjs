import { Component } from 'react';
import withRouter from 'umi/withRouter';

class Layout extends Component {
  componentDidMount(prevProps) {
    //     if (this.props.location !== prevProps.location) {
    console.log('did update');
    window.scrollTo(0, 0);
    //     }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(Layout);
