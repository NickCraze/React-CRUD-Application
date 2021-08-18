import { Table } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIdata, setAPIdata] = useState([]);
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  useEffect(() => {
    axios
      .get(`https://611b543b22020a00175a4403.mockapi.io/fakeData`)
      .then((response) => {
        setAPIdata(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://611b543b22020a00175a4403.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://611b543b22020a00175a4403.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIdata(getData.data);
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIdata.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <button onClick={() => setData(data)}> Update </button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
