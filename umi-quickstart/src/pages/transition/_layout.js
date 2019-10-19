import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Tran from './index';
import Tran2 from './Breakcrumbs';

export default withRouter(({ location }) => {
  if (location.pathname === '/transition') {
    return (
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={3000}>
          <Tran />
        </CSSTransition>
      </TransitionGroup>
    );
  } else {
    return (
      <div>
        <Tran2 />
      </div>
    );
  }
});
