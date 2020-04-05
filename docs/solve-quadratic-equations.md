---
type: module
difficulty: Intermediate
audience: ["Student"]
topics: ["Maths"]
---

# Solving quadratic equations
## Prerequisites
Understanding quadtratic expansions:

$$
(a+b)^2=a^2+2ab+b^2
$$


Glossary:

Word | Meaning
---| ---
Quadtratic equation | Any equation of the form $$ax^2+bx+c=0$$ (where a,b,c could be any number)
Roots | The solutions to the quadtratic equation - for what values of x is the equation 0? 

### Introduction

The following is a graph of $y=\frac{1}{2}x^2+x-\frac{3}{2}$.
![Graph of equation](https://www.intmath.com/quadratic-equations/svg/svgphp-graph-quadratic-function-4-s0.svg)

When you create the equation $y=\frac{1}{2}x^2+x-\frac{3}{2}=0$, the you're actually asking is: for what values of $x$ is $y=0$. Or even simpler:

>_What is $x$ when the graph crosses the $y$-axis?_

In this module you will learn how to:
- Complete the square
- Solve quadratic eqautions using:
  - The ABC-formula
  - Vieta's formula


## Completing the square
In order to solve a quadtratic equation, the following equation must be changed a bit
$$
ax^2+bx+c=0
$$
In order to use the square root to get rid of the squared $x$, the non-squared x needs to be taken into account. That's why we need to "complete the square".

To illustrate to concept of it, assume $a=1$. It's easier to understand the concept then.

Let's remove $c$ from both sides in the equation - you don't really care about it at the moment.
$$
x^2+bx=-c
$$
### Doing the square work
On the left side you have $x^2+bx$. This can be seen as a square with the side $x$ and a rectangle with the sides $x$ and $b$.
![Completing the square, image from mathisfun.com](https://www.mathsisfun.com/algebra/images/completing-square-geometry.gif)
If you split the rectangle along the middle you get two rectangles with the sides $x$ and $\frac{b}{2}$. Place these on the sides as illustrated in the picture.

There is almost a bigger square than $x^2$- you're just missing a little corner piece. You need to add it - __complete the square__. The added smaller square has the side $\frac{b}{2}$.

This is the formula for the bigger square:
$$
x^2+bx+(\frac{b}{2})^2
$$
$x^2$ is the area of the initial square. $bx$ is the area of the rectangles on the sides. $\frac{b}{2}^2$ is the area of the added little square.

The resulting big square has the sides $x+\frac{b}{2}$ and an area of $(x+\frac{b}{2})^2$

### Conclusion and usage
Two insights are suddenly apparent:
#### It describes quadtratic expansion
Do you remember quadtratic expansion? You're basically maniuplating your equation to do it backwards!
$$
(x+a)^2=x^2+2xa+a^2
$$
And in this case where $a=\frac{b}{2}$:
$$
(x+\frac{b}{2})^2=x^2+bx+(\frac{b}{2})^2
$$

#### Usage in initial quadratic equation
You came this far with manipulating the equation:
$$
x^2+bx=-c
$$
If you then add the little square:
$$
x^2+bx+(\frac{b}{2})^2=(\frac{b}{2})^2-c
$$
What conlusion can we take from this? If you know the values of $b$ and $c$ you can calculate the area of the big square with the right hand side in the equation:
$$
area=(\frac{b}{2})^2-c
$$

Go to the next step to learn how to solve for the roots of the equation by using this method!
## The ABC-formula
### Preparation
First you have the initial general equation
$$
ax^2+bx+c=0
$$
Then you remove $c$ from both sides
$$
ax^2+bx=-c
$$
Then you devide by $a$ since you want $x^2$ by itself, without any coefficent, to easier complete the square.
$$
x^2+\frac{b}{a}x=-\frac{c}{a}
$$

### [Complete the square](./1)
Recall the quadratic expansion: (Capital letters are used to not confuse it with the variables in the quadtrtic equation.)
$$
(A+B)^2=A^2+2AB+B^2
$$
If you have a look at the left hand side in our equation, then you have almost an expression similar to the quadtratic expansion.  
$$
x^2+\frac{b}{a}x
$$
Where $A^2=x^2$ and $2AB=\frac{b}{a}x$. From this you learn that $A=x$ and $B=\frac{b}{2a}$. You can that make a quadratic expansion our of that.
$$
(x+\frac{b}{2a}^2)=x^2+\frac{b}{a}x+(\frac{b}{2a})^2
$$
So what are you missing from our equation? The term for $B^2$, which is $(\frac{b}{2a})^2$! You need to add this both sides of the equation you prepared. Then you will end upp with this:
$$
x^2+\frac{b}{a}x+(\frac{b}{2a})^2=(\frac{b}{2a})^2-\frac{c}{a}
$$
Now you have a complete square, so you can simplify it a bit.
$$
(x+\frac{b}{2a})^2=(\frac{b}{2a})^2-\frac{c}{a}
$$

### Solve for $x$

Before you use the squre root, you will simplify the right-hand side too
$$
(\frac{b}{2a})^2-\frac{c}{a}=\frac{b^2}{4a^2}-\frac{c}{a}=\{\text{multiply}\frac{c}{a}\text{with}\frac{4a}{4a} \}=\frac{b^2}{4a^2}-\frac{4ac}{4a^2}=\frac{b^2-4ac}{4a^2}
$$
Then you end up with
$$
(x+\frac{b}{2a})^2=\frac{b^2-4ac}{4a^2}
$$
The you use the square root on both sides!
$$
x+\frac{b}{2a}=\pm\frac{\sqrt{b^2-4ac}}{\sqrt{4a^2}}=\pm\frac{\sqrt{b^2-4ac}}{2a}
$$
Remove $\frac{b}{2a}$ from both sides and you have it!
$$
x=-\frac{b}{2a}\pm\frac{\sqrt{b^2-4ac}}{2a}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$
### Solution
The final solution of the equation 
$$
ax^2+bx+c=0
$$
where the two different values of $x$ where $y=0$ (where the graph crosses the $y$-axis) is:
$$
x_1=\frac{-b+\sqrt{b^2-4ac}}{2a}
$$
$$
x_2=\frac{-b-\sqrt{b^2-4ac}}{2a}
$$

$$
\blacksquare
$$


## Lifehack: Vieta's Formula
Don't you just want to be able to solve quadtratic equations without putting number into a formula? Witht this approach you will be able to tell the roots by just looking at the coefficients.

With Vieta's formula you can get the answer for any quadtrtic equation of the form: 
$$
x^2+px+q=0
$$
Notice that you don't have a coefficient in front of $x^2$. This is just to make the approach easier to understand.

### Start with the roots
You have two roots - both values for $x$ when $y=0$. Let's call them $r$ and $s$. You then construct the following equation.
$$
x^2+px+q=(x-r)(x-s)=0
$$
What happened here? When $x=r$ you get the following:
$$
r^2+pr+q=(r-r)(r-s)=0\cdot(r-s)=0
$$
It's zero! Just like the original equation! The same holds true for $s$.

### Change the form of the expression

Now you expand the expression:
$$
(x-r)(x-s)=x^2-sx-rx+rs=x^2-(s+r)x+rs
$$
That's on the same form as your original equation!
$$
x^2+px+q=(x-r)(x-s)
$$
$$
x^2+px+q=x^2-(s+r)x+rs
$$
On the left hand side you have the quadtratic form with the coefficients $p$ and $q$. On the right hand side you have the exact same expression, but in terms of $r$ and $s$ - the solution to the equation. 

$$
p=-(s+r)
$$

$$
q=rs
$$

$p$ is the negative sum of the roots. $q$ is the product of the roots.

See the next section to figure out where this approach really shines!
## Example
>What are the solutions for $x^2-5x+6=0$?
### Using ABC fomula
$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$
$$
x=\frac{-(-5)\pm\sqrt{(-5)^2-4\cdot 1 \cdot 6}}{2\cdot 1}=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm\sqrt{25-24}}{2}=\frac{5\pm1}{2}
$$
$$
x_1=\frac{6}{2}=3, x_2=\frac{4}{2}=2
$$

### Using Vieta's formula
Setup the following eqaution using the formula directly
$$
\begin{cases}
x_1x_2 = 6 & (1)\\
-(x_1+x_2) = -5 & (2)
\end{cases}
$$
You could solve this algebraically, but that's not the point. You want to be able to just look at the equation and see the answer.

Let's have a look at equation $(1)$ and see what values you can have for $x_1$ and $x_2$.

$x_1$ | $x_2$
-- | --
2 | 3
1 | 6
-2 | -3
-1 | -6

To figure out which combination of these you should choose, let's try these value in equation $(2)$ with $x_1+x_2$. The answer should be 5.


$x_1$ | $x_2$ | $x_1+x_2$
-- | -- | --
2 | 3 | __5__
1 | 6 | 7
-2 | -3 | -5
-1 | -6 | -7

From this you can see that the solution is:
$$
x_1=2, x_2=3
$$

It's worth checking thios approach first if you are lazy, as it might save you lots off erroneous calculations.

## Summary
You have now learned a little bit about how to solve quadtratic equations. This includes:

- Completing the square
- How to find and use the ABC-formula
- Use Vieta's formula to solve a quadtratic equation by just looking at it