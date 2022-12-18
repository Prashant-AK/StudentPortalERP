import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
import { head, content } from './CategoryTableData';
import { facultyThunk } from '../../../redux/pages';

export const CategoryTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, facultyList } = useSelector((state) => state.adminState);
  const handleRemove = async (id) => {
    await dispatch(facultyThunk.deleteFaculty(id));
  };
  const keepDropDownOpen = () => {
    window.$('#dropDownOpen').addClass('open');
  };
  return (
    <div id="Student_table" style={{ backgroundColor: 'white' }}>
      <Table responsive>
        <thead style={{ borderTop: '1px solid black' }}>
          <tr>
            {head.map(({ colName }, index) => (
              <th key={index + colName}>{colName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!loading &&
            facultyList?.map((data, index) => (
              <tr key={data?._id}>
                <td>{index + 1}</td>
                <td>{data?.faculty_name}</td>
                <td>
                  {data?.contact_number}
                  <br />
                  {data?.email_address}
                </td>
                <td>{data?.home_address}</td>
                <td>
                  {data?.qualifications?.map((element) => (
                    <>
                      {element}
                      <br />
                    </>
                  ))}
                </td>
                <td>
                  {data?.subjects?.map((element) => (
                    <>
                      {element}
                      <br />
                    </>
                  ))}
                </td>
                <td>
                  {data?.course?.map((element) => (
                    <>
                      {element}
                      <br />
                    </>
                  ))}
                </td>
                <td>
                  {data?.semester?.map((element) => (
                    <>
                      {element}
                      <br />
                    </>
                  ))}
                </td>
                <td>
                  <DropdownButton
                    // as={ButtonGroup}
                    key="down"
                    // id={`dropdown-button-drop-down`}
                    drop="down"
                    variant="secondary"
                    title={<BsThreeDots />}
                    onClick={keepDropDownOpen}
                  >
                    <Dropdown.Item
                      eventKey="1"
                      onClick={() =>
                        navigate(`/create-faculty-profile/${data?._id}`, {
                          state: data,
                        })
                      }
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="2"
                      onClick={() => handleRemove(data?._id)}
                    >
                      Remove
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
