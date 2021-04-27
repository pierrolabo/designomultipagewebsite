# Frontend Mentor - GitHub Jobs API

![Design preview for the Designo Multi Pages Website coding challenge](./preview.jpg)

## What is Front End Mentor

To learn more about front end mentor, visit this link => https://www.frontendmentor.io/

## The challenge

The goal is to make responsive pixel perfect copy of an already established design. 
We're given a figma design.

This is a multipage website project and some pages share the same components.
React was a great tool for this project for sharing reusable components accross pages.
I choosed Sass over a css framwork to perfect my css skills and my code organistion by using BEM.
I also used and discovered formik to handle Forms.

##  Problem faced

1. I faced css comptability problem with some browsers (Safari, chrome on android).
  Using width or height 100% inside of a flex child component wouldn't work if the parent hadn't a fixed width or height.
  As i don't hold a Mac, i had to use Epiphany which is a browser based on webkit (safari engine).

2. React browser router didn't reset the scroll position between pages, so i had to create a  hook  to do so.

3. The behavior of some svg elements between screen resolutions, this obviously couln't be predicted by the figma design, so i had make it look nice.


##  Stack used

React & Sass

##  Final result

See final result here => https://designofm.netlify.app/
