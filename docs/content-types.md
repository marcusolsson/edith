---
type: Module
difficulty: Beginner
audience: ["Educator"]
topics: ["Content"]
---

# Content types

## Introduction

There are two types of content in Edith: _modules_ and _courses_.

## Modules

Modules are collections of steps. Although there's a suggested order, the learner can skip to the step they're interested in.

Look to the left and you'll see the _module overview_, which lists the steps in the current module. Click on any of the steps to view it.

### Create a module

To create a module:

1. Create a new file called `building-a-treehouse.md` in the `docs` directory at the root of this project.
1. Add the following text at the top of the file:
   ```
   ---
   type: Module
   ---
   ```
   This part is called _front matter_ and allows you to define aspects of the module.
1. Add a title to the module two lines below the front matter:
   ```
   # Building a tree house
   ```
1. Create a step by adding another line below the module title:
   ```
   ## Gather material
   ```
   Note the two hashtags in front of the title. Any line starting with two hashtags is a step title.
1. Add the step content below the step title:
   ```
   Go to the nearest hardware store.
   ```
1. Add another step:
   ```
   ## Find a tree

   This one looks good.
   ```
1. Save the file.

#### Complete example:

```text:title=building-a-treehouse.md
---
type: Module
---

# Building a tree house

## Gather material

Go to the nearest hardware store.

## Find a tree

This one looks good.
```

## Courses

Courses are curated collections of modules.

Think of a course as a music playlist. While the author might've had an intended order in which the learner consumes the content, they're also free to pick the ones that are interesting to them.

### Create a course

To create a course:

1. Create a new file called `outdoor-activities.md` in the `docs` directory at the root of this project.
1. Add the following text at the top of the file:
   ```
   ---
   type: Course
   ---
   ```
   This part is called _front matter_ and allows you to define aspects of the course.
1. Add a title to the course two lines below the front matter:
   ```
   # Outdoor activities
   ```
1. Add a description below the course title
   ```
   This course introduces you to a series of outdoor activities.
   ```
1. In the front matter, add a `curriculum` property:
   ```
   type: Course
   curriculum: ["/building-a-treehouse/", "/build-a-trampoline/"]
   ```
   The id of each module is the same as the filename (without the `.md`).
1. Save the file.

## Learn more

To learn more about how to write Markdown content, check out [Formatting text with Markdown](/modules/formatting-text/).
