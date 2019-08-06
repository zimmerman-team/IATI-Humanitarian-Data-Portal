import React from 'react';
import styled from 'styled-components';

import { TableCell, Paper } from '@material-ui/core';
import { MultiValuesCellModuleModel } from 'app/components/datadisplay/Table/model';

const MoreTooltip = styled(Paper)`
  width: 150px;
  margin-top: 5px;
  position: absolute;
`;

const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 23px;
`;

const MultiValuesCell = (props: MultiValuesCellModuleModel) => {
  const [showMore, setShowMore] = React.useState(false);
  const hasMore = props.value.length > 1;
  return (
    <TableCell {...props}>
      <div
        onMouseEnter={() => setShowMore(true)}
        onMouseLeave={() => setShowMore(false)}
      >
        {props.value[0]}
        {`${hasMore ? `, +${props.value.length - 1} more` : ''}`}
        {showMore && hasMore && (
          <MoreTooltip>
            <List>
              {props.value.map(item => (
                <li key={`multi-value-list-${item}`}>{item}</li>
              ))}
            </List>
          </MoreTooltip>
        )}
      </div>
    </TableCell>
  );
};

export default MultiValuesCell;
