import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';

function GeneralTable({ head, content }) {
  const navigate = useNavigate();
  return (
    <div id="Student_table" style={{ backgroundColor: 'white' }}>
      <Table>
        <thead style={{ borderTop: '1px solid black' }}>
          <tr>
            {head.map(({ colName }, index) => (
              <th key={index + colName}>{colName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((element, index) => (
            <>
              <tr>
                <td>{element}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GeneralTable;
