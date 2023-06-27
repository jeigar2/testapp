# testapp
js application that allows to test one or several valid answers.


To define a question, you need to provide the following properties within the question object:

1. **question**: This property represents the question itself. It should be a string that describes the question you want to ask.
2. **options**: This property is an array that holds the available options for the question. Each option should be a string and represents a possible answer choice for the question.
3. **correctAnswers**: This property specifies the correct answer(s) for the question. It should be an array containing the indices of the correct option(s) from the `options` array. If there is only one correct answer, provide a single-element array. If there are multiple correct answers, list all their corresponding indices in the array.
4. **explanation**: This property contains an explanation or additional information about the correct answer(s) for the question. It should be a string explaining why the correct option(s) is/are correct.

Here's an example of how to fill in the `question` object for a single-answer question:

```javascript
{
  question: "Example of a question with a single valid answer",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswers: [0], // Index of the correct option (in this case, Option 1)
  explanation: "Explanation of the correct answer."
}
```

And here's an example for a multiple-answer question:

```javascript
{
  question: "Example of a question with multiple valid answers",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswers: [0, 1], // Indices of the correct options (in this case, Option 1 and Option 2)
  explanation: "Explanation of the correct answers."
}
```

You can add more questions to the `questions` array using the same format. Make sure each question object follows this structure to ensure proper functioning of the code.

- Iteration (run)
  - https://jsfiddle.net/3xehr7nw/
  - https://jsfiddle.net/nuvt68La/
  - https://jsfiddle.net/me162t08/
  - https://jsfiddle.net/aznr718t/
  - https://jsfiddle.net/1x0seuLv/9/
  - https://jsfiddle.net/1x0seuLv/11/
  - https://jsfiddle.net/4jkzc7hw/ 199 PREGUNTAS
