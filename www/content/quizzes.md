---
type: module
difficulty: Intermediate
audience: ["Educator"]
topics: ["Content"]
---

# Adding quizzes

## Introduction

Quizzes allow learners to interact with the content. Add quizzes to your modules to keep learners engaged.

> **Important**: Quizzes are still experimental, and are likely to change in later version.

<quiz>
{
  "questions": [
    {
      "question": "What is the main organ of the cardiovascular system?",
      "answers": [
        {
          "answer": "Lungs",
          "response": "Try again!"
        },
        {
          "answer": "Heart",
          "response": "Correct!",
          "correct": true
        },
        {
          "answer": "Pancreas",
          "response": "Not quite."
        },
        {
          "answer": "Liver",
          "response": "That's not the right answer."
        }
      ]
    }
  ]
}
</quiz>

To add a quiz to your module, add the following to your Markdown content:

```md
<quiz>
{
  "questions": [
    {
      "question": "If you lined up all the neurons in the brain end to end, they would stretch:",
      "answers": [
        {
          "answer": "1,000 kilometers",
          "response": "Correct!",
          "correct": true
        },
        {
          "answer": "100 kilometers",
          "response": "Not quite."
        },
        {
          "answer": "10,000 kilometers",
          "response": "Try again!"
        },
        {
          "answer": "10 kilometers",
          "response": "That's not the right answer."
        }
      ]
    },
    {
      "question": "For what organ is dialysis used?",
      "answers": [
        {
          "answer": "Eye",
          "response": "Try again!"
        },
        {
          "answer": "Inner ear",
          "response": "Not quite."
        },
        {
          "answer": "Kidney",
          "response": "Correct!",
          "correct": true
        },
        {
          "answer": "Brain",
          "response": "That's not the right answer."
        }
      ]
    }
  ]
}
</quiz>
```

and you'll see something like this:

<quiz type="multi-choice">
{
  "questions": [
    {
      "question": "If you lined up all the neurons in the brain end to end, they would stretch:",
      "answers": [
        {
          "answer": "1,000 kilometers",
          "response": "Correct!",
          "correct": true
        },
        {
          "answer": "100 kilometers",
          "response": "Not quite."
        },
        {
          "answer": "10,000 kilometers",
          "response": "Try again!"
        },
        {
          "answer": "10 kilometers",
          "response": "That's not the right answer."
        }
      ]
    },
    {
      "question": "For what organ is dialysis used?",
      "answers": [
        {
          "answer": "Eye",
          "response": "Try again!"
        },
        {
          "answer": "Inner ear",
          "response": "Not quite."
        },
        {
          "answer": "Kidney",
          "response": "Correct!",
          "correct": true
        },
        {
          "answer": "Brain",
          "response": "That's not the right answer."
        }
      ]
    }
  ]
}
</quiz>
