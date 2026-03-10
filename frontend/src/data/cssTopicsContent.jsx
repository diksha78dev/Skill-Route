import React from 'react';

const CssBoxModelVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">CSS Box Model</div>
    <div className="flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm dark:shadow-none transition-colors">
      <div className="text-sm text-orange-600 dark:text-orange-300 mb-2 font-bold">Margin</div>
      <div className="border-2 border-orange-300 dark:border-orange-600 w-full p-4 flex flex-col items-center">
        <div className="text-sm text-amber-600 dark:text-amber-300 mb-2 font-bold">Border</div>
        <div className="border-2 border-amber-300 dark:border-amber-600 w-full p-4 flex flex-col items-center">
          <div className="text-sm text-blue-600 dark:text-blue-300 mb-2 font-bold">Padding</div>
          <div className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-600 w-full p-4 text-center">
            <div className="text-sm text-gray-900 dark:text-white font-bold">Content</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FlexboxVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">Flexbox Container</div>
    <div className="flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 gap-2 shadow-sm dark:shadow-none w-full max-w-md transition-colors">
      {['Item 1', 'Item 2', 'Item 3'].map((item, idx) => (
        <div key={idx} className="flex-1 bg-cyan-100 dark:bg-cyan-900 border border-cyan-300 dark:border-cyan-600 p-3 rounded text-center text-sm font-semibold text-cyan-900 dark:text-cyan-100 transition-colors">
          {item}
        </div>
      ))}
    </div>
    <div className="text-xs text-gray-600 dark:text-gray-400 text-center transition-colors">flex-direction: row (default)</div>
  </div>
);

const GridVisual = () => (
  <div className="flex flex-col items-center gap-4 my-6">
    <div className="text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors">CSS Grid (3 Columns)</div>
    <div className="grid grid-cols-3 gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm dark:shadow-none w-full max-w-md transition-colors">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num} className="bg-emerald-100 dark:bg-emerald-900 border border-emerald-300 dark:border-emerald-600 p-4 rounded text-center font-semibold text-emerald-900 dark:text-emerald-100 transition-colors text-sm">
          Box {num}
        </div>
      ))}
    </div>
  </div>
);

export const cssTopicsContent = {
  "selectors": {
    "element-selectors": {
      title: "Element Selectors",
      explanation: "Element selectors target HTML tags directly. For example, 'p' selects all paragraph elements, 'div' selects all divs. This is the most basic and useful selector for applying styles to all elements of a particular type.",
      code: {
        css: `/* Element Selector - targets all <p> elements */
p {
  color: blue;
  font-size: 16px;
}

/* Multiple element selectors */
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: navy;
}

/* All elements */
* {
  margin: 0;
  padding: 0;
}`
      }
    },
    "class-id-selectors": {
      title: "Class & ID Selectors",
      explanation: "Class selectors (.) target elements with a specific class attribute and can be reused on multiple elements. ID selectors (#) target a unique element with a specific ID. IDs should be unique within a page.",
      code: {
        css: `/* Class Selector - reusable, can be used on multiple elements */
.button {
  background-color: green;
  padding: 10px 20px;
  border-radius: 5px;
}

.button:hover {
  background-color: darkgreen;
}

/* ID Selector - unique, used only once */
#header {
  background-color: navy;
  color: white;
  padding: 20px;
}

#main-content {
  width: 80%;
  margin: 0 auto;
}

/* Multiple classes */
.btn.btn-primary {
  color: white;
}`
      }
    },
    "attribute-selectors": {
      title: "Attribute Selectors",
      explanation: "Attribute selectors target elements based on their attributes. You can select by attribute presence, value, or partial match. Common uses include styling inputs of specific types.",
      code: {
        css: `/* Attribute present */
input[required] {
  border: 2px solid red;
}

/* Attribute equals value */
input[type="email"] {
  border-color: blue;
}

input[type="password"] {
  letter-spacing: 0.5em;
}

/* Attribute starts with */
a[href^="https"] {
  color: green;
}

/* Attribute contains */
a[href*="example"] {
  text-decoration: underline;
}

/* Attribute ends with */
img[src$=".png"] {
  border: 1px solid gray;
}`
      }
    },
    "pseudo-classes": {
      title: "Pseudo-classes & Pseudo-elements",
      explanation: "Pseudo-classes (: notation) style elements based on their state or position. Pseudo-elements (:: notation) style specific parts of elements. Common ones include :hover, :focus, ::before, ::after.",
      code: {
        css: `/* Pseudo-classes - state based */
a:hover {
  color: red;
  text-decoration: underline;
}

a:visited {
  color: purple;
}

input:focus {
  outline: none;
  border: 2px solid blue;
  box-shadow: 0 0 5px blue;
}

/* :nth-child selectors */
li:nth-child(odd) {
  background-color: #f0f0f0;
}

li:first-child {
  font-weight: bold;
}

/* Pseudo-elements */
p::first-letter {
  font-size: 1.5em;
  font-weight: bold;
}

::before and ::after {
  content: " ";
  display: block;
}`
      }
    }
  },
  "box-model": {
    "box-model-basics": {
      title: "Box Model Basics",
      explanation: "Every HTML element is a box consisting of content, padding, border, and margin. The content area contains the actual element. Understanding the box model is fundamental to CSS layout.",
      visual: <CssBoxModelVisual />,
      code: {
        css: `/* Basic Box Model */
div {
  width: 200px;
  height: 100px;
  
  /* Content */
  background-color: lightblue;
  
  /* Padding - inside the border */
  padding: 20px;
  
  /* Border */
  border: 2px solid blue;
  
  /* Margin - outside the border */
  margin: 15px;
}`
      }
    },
    "padding-margin": {
      title: "Padding & Margin",
      explanation: "Padding is the space inside an element (between content and border). Margin is the space outside an element (between border and other elements). Both can be set individually for each side.",
      code: {
        css: `/* Padding - all sides same */
.box1 {
  padding: 20px;
}

/* Padding - top/bottom, left/right */
.box2 {
  padding: 10px 20px;
}

/* Padding - individual sides */
.box3 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Margin - similar to padding */
.box4 {
  margin: 20px;
  margin: 10px 20px; /* vertical, horizontal */
}

/* Margin auto - center elements */
.centered {
  width: 80%;
  margin: 0 auto;
}`
      }
    },
    "border-properties": {
      title: "Border Properties",
      explanation: "Borders surround the padding and content. You can control border width, style, color, and create rounded corners. Borders can be set individually for each side.",
      code: {
        css: `/* Border shorthand */
.box {
  border: 2px solid black;
}

/* Border individual properties */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

/* Individual sides */
.box {
  border-top: 2px solid red;
  border-right: 2px solid blue;
  border-bottom: 2px solid green;
  border-left: 2px solid yellow;
}

/* Border styles */
.dashed { border: 2px dashed blue; }
.dotted { border: 2px dotted green; }
.double { border: 4px double black; }

/* Rounded corners */
.rounded {
  border-radius: 10px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}`
      }
    },
    "box-sizing": {
      title: "Box-sizing Property",
      explanation: "By default (content-box), width and height only include the content, not padding or border. With border-box, padding and border are included in the width/height. Border-box is often preferred for easier calculations.",
      code: {
        css: `/* Default: content-box */
.box1 {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
  
  /* Total width = 200 + 20*2 + 2*2 = 246px */
}

/* Border-box: include padding and border */
.box2 {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
  
  /* Total width = 200px (padding and border included) */
}

/* Apply to all elements */
* {
  box-sizing: border-box;
}`
      }
    }
  },
  "flexbox": {
    "flex-container": {
      title: "Flex Container",
      explanation: "A flex container is created by setting display: flex on a parent element. The container controls how flex items are arranged (row or column, spacing, alignment).",
      visual: <FlexboxVisual />,
      code: {
        css: `/* Create flex container */
.flex-container {
  display: flex;
  gap: 10px; /* Space between items */
}

/* Row layout (default) */
.flex-row {
  display: flex;
  flex-direction: row;
}

/* Column layout */
.flex-column {
  display: flex;
  flex-direction: column;
}

/* Wrap items to next line */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}`
      }
    },
    "flex-items": {
      title: "Flex Items",
      explanation: "Flex items are direct children of a flex container. They automatically expand or shrink to fill available space. You can control individual item sizing with the flex property.",
      code: {
        css: `/* Flex shorthand */
.flex-item {
  flex: 1; /* grow, shrink, basis */
}

/* Individual properties */
.item {
  flex-grow: 1;    /* grow when there's space */
  flex-shrink: 1;  /* shrink when constrained */
  flex-basis: auto; /* initial size */
}

/* Fixed size item */
.sidebar {
  flex: 0 0 250px; /* no grow, no shrink, 250px width */
}

/* Content area takes remaining space */
.content {
  flex: 1; /* takes all remaining space */
}`
      }
    },
    "flex-direction": {
      title: "Flex Direction & Wrap",
      explanation: "flex-direction determines if items arrange in rows or columns. flex-wrap controls whether items wrap to a new line when they don't fit.",
      code: {
        css: `/* Row - default */
.flex-row {
  display: flex;
  flex-direction: row;
  /* items go left to right */
}

/* Row reverse */
.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
  /* items go right to left */
}

/* Column */
.flex-column {
  display: flex;
  flex-direction: column;
  /* items go top to bottom */
}

/* Wrap to next line */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  /* items wrap when container is too small */
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}`
      }
    },
    "flex-alignment": {
      title: "Justify & Align",
      explanation: "justify-content controls spacing along the main axis (horizontal in row mode). align-items controls alignment along the cross axis (vertical in row mode).",
      code: {
        css: `/* justify-content - main axis spacing */
.flex-center {
  display: flex;
  justify-content: center;
}

.flex-space-between {
  display: flex;
  justify-content: space-between;
}

.flex-space-around {
  display: flex;
  justify-content: space-around;
}

.flex-flex-end {
  display: flex;
  justify-content: flex-end;
}

/* align-items - cross axis alignment */
.flex-align-center {
  display: flex;
  align-items: center;
  height: 200px;
}

.flex-align-stretch {
  display: flex;
  align-items: stretch;
}

/* Center both ways */
.center-both {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}`
      }
    }
  },
  "grid": {
    "grid-container": {
      title: "Grid Container",
      explanation: "A grid container is created by setting display: grid. It creates a two-dimensional grid layout where you can place items in specific rows and columns.",
      visual: <GridVisual />,
      code: {
        css: `/* Create grid container */
.grid-container {
  display: grid;
  gap: 15px; /* Space between items */
}

/* Define columns */
.grid-3col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

/* Define rows */
.grid-rows {
  display: grid;
  grid-template-rows: 100px auto 100px;
}

/* Shorthand: columns and rows */
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}`
      }
    },
    "grid-items": {
      title: "Grid Items",
      explanation: "Grid items are children of a grid container. You can position items in specific grid cells using grid-column and grid-row properties.",
      code: {
        css: `/* Span multiple columns */
.header {
  grid-column: 1 / -1; /* spans all columns */
}

.sidebar {
  grid-column: 1 / 2;  /* column 1 only */
  grid-row: 2 / 4;     /* rows 2-3 */
}

.main {
  grid-column: 2 / -1; /* columns 2 to end */
  grid-row: 2 / 3;     /* row 2 */
}

/* Span specify number */
.box {
  grid-column: span 2; /* span 2 columns */
  grid-row: span 3;    /* span 3 rows */
}`
      }
    },
    "grid-template": {
      title: "Grid Template Columns & Rows",
      explanation: "grid-template-columns and grid-template-rows define the tracks (columns and rows) of the grid. Use fixed sizes, fractions, or auto sizing.",
      code: {
        css: `/* Fixed sizes */
.grid {
  grid-template-columns: 200px 300px 150px;
}

/* Fractions - divide available space */
.grid {
  grid-template-columns: 1fr 2fr 1fr;
}

/* Repeat function */
.grid {
  grid-template-columns: repeat(4, 200px);
}

.grid {
  grid-template-columns: repeat(3, 1fr);
}

/* Mix fixed and flexible */
.grid {
  grid-template-columns: 200px 1fr 200px;
}

/* Auto sizing */
.grid {
  grid-template-columns: auto auto auto;
}

/* Responsive with auto-fit */
.responsive {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`
      }
    },
    "grid-areas": {
      title: "Grid Areas",
      explanation: "Grid template areas allow you to name regions of your grid and assign items to them by name. This makes complex layouts more readable.",
      code: {
        css: `/* Define named areas */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
}

/* Assign items to areas */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Responsive areas */
@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}`
      }
    }
  },
  "responsive-design": {
    "viewport-meta": {
      title: "Viewport Meta Tag",
      explanation: "The viewport meta tag in HTML tells the browser how to render the page on different devices. It's essential for responsive design on mobile devices.",
      code: {
        css: `<!-- Add to <head> section of HTML -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Parameters: -->
<!-- width=device-width: width matches device width -->
<!-- initial-scale=1: initial zoom level is 1 -->
<!-- user-scalable: allows user pinch-zoom (optional) -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">`
      }
    },
    "media-queries": {
      title: "Media Queries",
      explanation: "Media queries apply styles based on screen size, orientation, and other features. They are the foundation of responsive design.",
      code: {
        css: `/* Mobile first - base styles for mobile */
body {
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
  
  .container {
    width: 750px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
  
  .container {
    width: 960px;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container {
    width: 1200px;
  }
}`
      }
    },
    "mobile-first": {
      title: "Mobile-first Approach",
      explanation: "Write CSS for mobile devices first, then add media queries to enhance for larger screens. This ensures better performance and usability on mobile.",
      code: {
        css: `/* Mobile styles - default */
.grid {
  grid-template-columns: 1fr;
  padding: 10px;
}

.sidebar {
  display: none;
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 2fr 1fr;
    padding: 30px;
  }
  
  .sidebar {
    display: block;
  }
}`
      }
    },
    "responsive-units": {
      title: "Responsive Units",
      explanation: "Use relative units (%, em, rem) instead of fixed pixels for better responsiveness. Percentages are relative to parent, em to font-size, rem to root font-size.",
      code: {
        css: `/* Percentage - relative to parent */
.container {
  width: 80%; /* 80% of parent width */
}

/* Em - relative to element's font-size */
.text {
  font-size: 16px;
  line-height: 1.5em; /* 1.5 * 16px = 24px */
  margin: 1em; /* 1 * 16px = 16px */
}

/* Rem - relative to root (html) font-size */
html {
  font-size: 16px;
}

body {
  font-size: 1rem; /* 16px */
}

h1 {
  font-size: 2rem; /* 32px */
}

/* Viewport units */
.fullscreen {
  width: 100vw; /* 100% of viewport width */
  height: 100vh; /* 100% of viewport height */
}

/* Max-width for responsive images */
img {
  max-width: 100%;
  height: auto;
}`
      }
    }
  }
};

export default cssTopicsContent;
