import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

export class AnswerForm extends Component {
    render() {
        return (
            <div>
                <Form>
  <Form.Group controlId="formBasicImput">
    <Form.Control type="input" placeholder="What is..." />
    <Form.Text className="text-muted">
      Be sure to use all lower case letters.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </div>
        )
    }
}

export default AnswerForm




