import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";

export class QuestionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledButtons: [],
      questionsList: {
        200: {
          "what color is the sky?": "blue",
          "what color is the grass": "green",
          "what is my dogs name": "sunny",
          "what is my cats name": "tiddles",
          "what is my favorite color": "pink",
        },
        400: {
          "what is my favorite food": "pasta",
          "what is my favorite wine": "chardonnay",
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
    };
  }

  //this.setState({ questions: this.state.questions.filter(answers => answers.id) });//else display incorrect

  render() {
    // Function to set user buttn click
    const handleMoneyButtonClick = (
      question,
      correctAnswer,
      questionAmount
    ) => {
      console.log("-------- Button Selected --------");
      console.log("question amount", questionAmount);
      console.log("question asked: ", question);
      console.log("correct answer: ", correctAnswer);

      this.setState({
        disabledButtons: [...this.state.disabledButtons, question],
        currentDisplayedQuestion: question,
        correctAnswer: correctAnswer,
        // userAnswer: question,
      });
    };
    // Function to set user answer
    // you can use event whenever you are creating an onChange function OR onClick
    const setUserAnswer = (event) => {
      // console.log("user answer", event.target.value);
      this.setState({ userAnswer: event.target.value });
    };

    const checkAnswer = () => {
      //don't need to pass through parameters because correctAnswer, userAnswer, and currentDisplayedQuestion etc. are locally(any component on this page has access) stored state
      console.log("the correct answer is", this.state.correctAnswer);
      console.log("user answer", this.state.userAnswer);
      console.log("the question is", this.state.currentDisplayedQuestion);
      this.setState({ answerSubmitted: true });

      // Step 2:  add a set state to set the state for correct or incorrectanswer

      setTimeout(function () {
        resetQuestions();
      }, 5000);
      //tertinary operaters this.state.answerSubmitted ? ths.state.useerAnwer : this.state.question
    };
    const resetQuestions = () => {
      this.setState({
        answerSubmitted: false,
        correctAnswer: "",
        userAnswer: "",
        currentDisplayedQuestion: "pick a question",
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
            {Object.entries(this.state.questionsList).map(
              //getting the entries(key value pairs) from the questionsList
              ([key, value], index) => {
                //key is equal to dollar value
                // console.log("key: ", key);
                //value is an object containing questions(key) with their corresponding answers(value)
                // using a map within a map you cannot reuse the same keys/value names
                // console.log("value: ", value);
                // console.log("index: ", index);
                return (
                  <tr key={index}>
                    {Object.entries(value).map(([qkey, qvalue], qindex) => {
                      //qkey is equal to the question string
                      // console.log("qkey:", qkey);
                      //qvalue is equal to the correct answer string
                      // console.log("qvalue:", qvalue);
                      // console.log("qindex:", qindex);
                      return (
                        <td key={qindex}>
                          <Button
                            onClick={() =>
                              handleMoneyButtonClick(qkey, qvalue, key)
                            }
                            variant="primary"
                          >
                            {key}
                          </Button>
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
        {this.state.currentDisplayedQuestion && (
          <h1>{this.state.currentDisplayedQuestion}</h1>
        )}

        <Form>
          <Form.Group controlId="formBasicImput">
            <Form.Control
              type="input"
              placeholder="What is..."
              value={this.state.userAnswer}
              onChange={setUserAnswer}
            />
            <Form.Text className="text-muted">
              Be sure to use all lower case letters.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" onClick={() => checkAnswer()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default QuestionTable;
