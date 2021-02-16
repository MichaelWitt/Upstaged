import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";

export class QuestionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledButtons: [],
      questions: {
        200: [
          "what color is the sky?",
          "what color is the grass?",
          "question string will go here",
          "question string will go here",
          "question string will go here",
        ],
        400: [
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
        ],
        600: [
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
        ],
        800: [
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here,",
        ],
        1000: [
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
          "question string will go here",
        ],
      },
      questionsList: {
        200: {
          "question one?": "blue",
          "question 2": "answer_2",
          "question 3": "answer_3",
          "question 4:": "answer_4",
          "question 5:": "answer_5",
        },
        400: {
          "question 1": "answer_1",
          "question 2": "answer_2",
          "question 3": "answer_3",
          "question 4:": "answer_4",
          "question 5:": "answer_5",
        },
        600: {
          "question 1": "answer_1",
          "question 2": "answer_2",
          "question 3": "answer_3",
          "question 4:": "answer_4",
          "question 5:": "answer_5",
        },
        800: {
          "question 1": "answer_1",
          "question 2": "answer_2",
          "question 3": "answer_3",
          "question 4:": "answer_4",
          "question 5:": "answer_5",
        },
        1000: {
          "question 1": "answer_1",
          "question 2": "answer_2",
          "question 3": "answer_3",
          "question 4": "answer_4",
          "question 5": "answer_5",
        },
      },

      currentDisplayedQuestion: "",
      totalWinnings: 0,
      userAnswer: "",
      answerSubmitted: false,
      correctAnswer: "",
      buttonId: "",
    };
  }

  //this.setState({ questions: this.state.questions.filter(answers => answers.id) });//else display incorrect

  render() {
    const checkAnswer = (uAnswer, uQuestion) => {
      console.log("the answer is", uAnswer);
      console.log("the question is", uQuestion);
      this.setState({ answerSubmitted: true });

      // Step 2:  add a set state to set the state for correct or incorrectanswer
      console.log("questionslist", this.state.questionsList);
      Object.entries(this.state.questionsList).map(([key, value]) => {
        console.log("key: ", key);
        console.log("value: ", value);
        //if id=  then this.setState=correctAnswer
      });
      // Step 2: !!!!!!!!!!!!!! add function here to check answer

      setTimeout(function () {
        this.setState({ answerSubmitted: false });
      }, 3000);
      //tertinary operaters this.state.answerSubmitted ? ths.state.useerAnwer : this.state.question
    };
    //have to return the answer
    //this.setstate for useranswer, use boolean for true/false

    const handleMoneyButtonClick = (
      buttonId,
      questionColumn,
      questionAmount
    ) => {
      console.log("click", buttonId);
      console.log(
        "question asked: ",
        this.state.questions[questionAmount][questionColumn]
      );

      this.setState({
        disabledButtons: [...this.state.disabledButtons, buttonId],
        currentDisplayedQuestion: this.state.questions[questionAmount][
          questionColumn
        ],
        userAnswer: buttonId,
      });
    };

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Theatre Lingo</th>
              <th>Name the Show</th>
              <th>Who Wrote It</th>
              <th>Starts With the Letter ''</th>
              <th>One More Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column1-200")}
                  onClick={() =>
                    handleMoneyButtonClick("column1-200", 0, "200")
                  }
                  variant="primary"
                >
                  $200
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column2-200")}
                  onClick={() =>
                    handleMoneyButtonClick("column2-200", 1, "200")
                  }
                  variant="primary"
                >
                  $200
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column3-200")}
                  onClick={() =>
                    handleMoneyButtonClick("column3-200", 2, "200")
                  }
                  variant="primary"
                >
                  $200
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column4-200")}
                  onClick={() =>
                    handleMoneyButtonClick("column4-200", 3, "200")
                  }
                  variant="primary"
                >
                  $200
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column5-200")}
                  onClick={() =>
                    handleMoneyButtonClick("column5-200", 4, "200")
                  }
                  variant="primary"
                >
                  $200
                </Button>{" "}
              </th>
            </tr>
            <tr>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column1-400")}
                  onClick={() =>
                    handleMoneyButtonClick("column1-400", 0, "400")
                  }
                  variant="primary"
                >
                  $400
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column2-400")}
                  onClick={() =>
                    handleMoneyButtonClick("column2-400", 1, "400")
                  }
                  variant="primary"
                >
                  $400
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column3-400")}
                  onClick={() =>
                    handleMoneyButtonClick("column3-400", 2, "400")
                  }
                  variant="primary"
                >
                  $400
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column4-400")}
                  onClick={() =>
                    handleMoneyButtonClick("column4-400", 3, "400")
                  }
                  variant="primary"
                >
                  $400
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column5-400")}
                  onClick={() =>
                    handleMoneyButtonClick("column5-400", 4, "400")
                  }
                  variant="primary"
                >
                  $400
                </Button>{" "}
              </th>
            </tr>
            <tr>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column1-600")}
                  onClick={() =>
                    handleMoneyButtonClick("column1-600", 0, "600")
                  }
                  variant="primary"
                >
                  $600
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column2-600")}
                  onClick={() =>
                    handleMoneyButtonClick("column2-600", 1, "600")
                  }
                  variant="primary"
                >
                  $600
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column3-600")}
                  onClick={() =>
                    handleMoneyButtonClick("column3-600", 2, "600")
                  }
                  variant="primary"
                >
                  $600
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column4-600")}
                  onClick={() =>
                    handleMoneyButtonClick("column4-600", 3, "600")
                  }
                  variant="primary"
                >
                  $600
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column5-600")}
                  onClick={() =>
                    handleMoneyButtonClick("column5-600", 4, "600")
                  }
                  variant="primary"
                >
                  $600
                </Button>{" "}
              </th>
            </tr>
            <tr>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column1-800")}
                  onClick={() =>
                    handleMoneyButtonClick("column1-800", 0, "800")
                  }
                  variant="primary"
                >
                  $800
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column2-800")}
                  onClick={() =>
                    handleMoneyButtonClick("column2-800", 1, "800")
                  }
                  variant="primary"
                >
                  $800
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column3-800")}
                  onClick={() =>
                    handleMoneyButtonClick("column3-800", 2, "800")
                  }
                  variant="primary"
                >
                  $800
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column4-800")}
                  onClick={() =>
                    handleMoneyButtonClick("column4-800", 3, "800")
                  }
                  variant="primary"
                >
                  $800
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column5-800")}
                  onClick={() =>
                    handleMoneyButtonClick("column5-800", 4, "800")
                  }
                  variant="primary"
                >
                  $800
                </Button>{" "}
              </th>
            </tr>
            <tr>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column1-1000")}
                  onClick={() =>
                    handleMoneyButtonClick("column1-1000", 0, "1000")
                  }
                  variant="primary"
                >
                  $1000
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column2-1000")}
                  onClick={() =>
                    handleMoneyButtonClick("column2-1000", 1, "1000")
                  }
                  variant="primary"
                >
                  $1000
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column3-1000")}
                  onClick={() =>
                    handleMoneyButtonClick("column3-1000", 2, "1000")
                  }
                  variant="primary"
                >
                  $1000
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column4-1000")}
                  onClick={() =>
                    handleMoneyButtonClick("column4-1000", 3, "1000")
                  }
                  variant="primary"
                >
                  $1000
                </Button>{" "}
              </th>
              <th>
                <Button
                  disabled={this.state.disabledButtons.includes("column5-1000")}
                  onClick={() =>
                    handleMoneyButtonClick("column5-1000", 4, "1000")
                  }
                  variant="primary"
                >
                  $1000
                </Button>{" "}
              </th>
            </tr>
          </tbody>
        </Table>
        {this.state.currentDisplayedQuestion && (
          <h1>{this.state.currentDisplayedQuestion}</h1>
        )}

        <Form>
          <Form.Group controlId="formBasicImput">
            <Form.Control type="input" placeholder="What is..." />
            <Form.Text className="text-muted">
              Be sure to use all lower case letters.
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            onClick={() =>
              checkAnswer(
                this.state.userAnswer,
                this.state.currentDisplayedQuestion
              )
            }
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default QuestionTable;
