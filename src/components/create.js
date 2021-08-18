import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Create() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [checkbox, setcheckBox] = useState(false);

  let history = useHistory();

  const postData = () => {
    axios
      .post("https://611b543b22020a00175a4403.mockapi.io/fakeData", {
        firstName,
        lastName,
        checkbox
      })
      .then(() => {history.push("/read");
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setcheckBox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Create;
