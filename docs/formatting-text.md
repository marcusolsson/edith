---
type: module
difficulty: Beginner
audience: ["Educator"]
topics: ["Content"]
---

# Formatting text using Markdown

## Introduction

Edith uses [Remark](https://remark.js.org/) to transform Markdown documents into HTML.

## Headings

```md
### Heading 2

#### Heading 3

##### Heading 4

###### Heading 5
```

results in:

### Heading 2

#### Heading 3

##### Heading 4

###### Heading 5

> Note that the heading levels are shifted, i.e. three hashtags results in a h2 heading. This is because the single hashtag heading is reserved for the module title.

## Emphasis

### Bold

```md
This text is **bold**
```

results in:

This text is **bold**

### Italic

```md
This text is _italic_
```

results in:

This text is _italic_

### Bold and italic

```md
This text is ***bold and italic***
```

results in:

This text is ***bold and italic***


## Blockquotes

```md
> **Note**: This is a blockquote.
```

results in:

> **Note**: This is a blockquote.

### Multiple paragraphs

```md
> First paragraph.
>
> Second paragraph.
```

results in:

> First paragraph.
>
> Second paragraph.

### Blockquote with nested elements

```md
> ### Blockquote with other elements:
> - **bold**
> - _italic_
```

results in:

> #### Blockquote with other elements:
> - **bold**
> - _italic_

## Lists

### Ordered list

```
1. First item
1. Second item
   1. Indented item
   1. Indented item
1. Third item
```

results in:

1. First item
1. Second item
   1. Indented item
   1. Indented item
1. Third item

### Unordered list

```
- First item
- Second item
  - Indented item
  - Indented item
- Third item
```

results in:

- First item
- Second item
  - Indented item
  - Indented item
- Third item

### Elements in lists


- First item

  Paragraph
- Second item

  > Blockquote

- Third item

  ```
  code
  ```

## Images

```md
![red apple fruit on four pyle books](./sample.jpg)
```

results in:

![red apple fruit on four pyle books](sample.jpg)

## Tables

```md
| First name | Last name | Number |
|------------|-----------|--------|
| Jonathan   | Byers     | 1      |
```

results in:

| First name | Last name | Number |
|------------|-----------|--------|
| Jonathan   | Byers     | 1      |

### Aligning columns

```md
| First name | Last name | Number |
|------------|-----------|-------:|
| Jonathan   | Byers     |      1 |
```

results in:

| First name | Last name | Number |
|------------|-----------|-------:|
| Jonathan   | Byers     |      1 |

## Code

### Inline code

Here's an example of `inline` code.

### Code blocks

````
```
cat main.go
```
````

results in:

```
cat main.go
```

### Languages

````
```jsx
import React from "react"

export default props => {
    return (
        <p>Hello</p>
    )
}
```
````

results in:

```jsx
import React from "react"

export default props => {
    return (
        <p>Hello</p>
    )
}
```

### Code titles

````
```go:title=main.go
package main

import "os"

func main() {
    os.Exit(1)
}
```
````

results in:

```go:title=main.go
package main

import "os"

func main() {
    os.Exit(1)
}
```

## Horizontal rules

```md
---
```

results in:

---

## Links

```md
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
```

results in:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

### Adding tooltips

```md
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
```

results in:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

## Maths

You can write maths in your Markdown [using LaTeX mathematical expressions.](https://www.overleaf.com/learn/latex/mathematical_expressions) 

### Inline
Write an inline expression by wrapping it in `$`.  
```md
Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

```

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

###Block
Write a block expression by wrapping it in `$$`.
```md
$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

```md
$$
\oint_C \textbf{E} \cdot dl = - \int_S \frac{\partial\textbf{B}}{\partial t} \cdot d\textbf{s}
$$
```

$$
\oint_C \textbf{E} \cdot dl = - \int_S \frac{\partial\textbf{B}}{\partial t} \cdot d\textbf{s}
$$