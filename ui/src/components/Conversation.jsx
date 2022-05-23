import {
  TableRow,
  TableCell,
  Checkbox
} from '@mui/material';
import { useState } from 'react';

export default function Conversation(props) {
  const {
     id, 
     otherPartyName,
     itemName,
     messageBody,
     updatedAt,
     onClick,
     read
    } = props;

  const [isRead, setIsRead] = useState(read)
    
  const ConvBackCol = isRead ? "lightgrey" : "white";

  const handleClick = () => {
    onClick();
    setIsRead(true);
  }

  return (
    
    <TableRow
      key={id}
      sx={{background: ConvBackCol, '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={handleClick}
    >
      <TableCell>
        <Checkbox color="primary" />
      </TableCell>
      <TableCell component="th" scope="row" >
        {otherPartyName}
      </TableCell>
      <TableCell>{itemName}</TableCell>
      <TableCell sx={{
        // display: 'table-cell',
        width: 'auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
       
          {messageBody}
             
      </TableCell>
      <TableCell align="right">{updatedAt}</TableCell>
    </TableRow>
  );
};
