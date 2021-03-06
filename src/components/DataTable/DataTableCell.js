/* @flow */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple';
import type { $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {|
  /**
   * Content of the `DataTableCell`.
   */
  children: React.Node,
  /**
   * Align the text to the right.
   */
  right?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
|};

class DataTableCell extends React.Component<Props> {
  static displayName = 'DataTable.Cell';

  render() {
    const { children, style, right, ...rest } = this.props;

    return (
      <TouchableRipple
        {...rest}
        style={[styles.container, right && styles.right, style]}
      >
        <Text numberOfLines={1}>{children}</Text>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  right: {
    justifyContent: 'flex-end',
  },
});

export default DataTableCell;
