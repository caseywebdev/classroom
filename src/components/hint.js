import React, {Component} from 'react';
import Popover from 'react-popover';
import styles from './hint.scss';

const render = ({
  component,
  component: {
    props: {children, content, position},
    state: {isOpen}
  }
}) =>
  <Popover
    body={content}
    isOpen={isOpen}
    onOuterAction={() => component.setState({isOpen: false})}
    preferPlace={position}
  >
    <div
      className={styles.container}
      onClick={() => component.setState({isOpen: !isOpen})}
    >
      {children}
    </div>
  </Popover>;

export default class extends Component {
  state = {isOpen: false};

  render() {
    return render({component: this});
  }
}
