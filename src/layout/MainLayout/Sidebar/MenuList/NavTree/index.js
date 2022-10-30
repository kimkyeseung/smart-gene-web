import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';
import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

const NavTree = ({ item }) => {
  const theme = useTheme();

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  const expandItem = (accom, node) => {
    accom.push(node.id);
    if (Array.isArray(node.children)) {
      node.children.reduce(expandItem, accom);
    }
    return accom;
  };

  return (
    <>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={item.children.reduce(expandItem, [item.id])}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        {renderTree(item)}
      </TreeView>
      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

NavTree.propTypes = {
  item: PropTypes.object
};

export default NavTree;
