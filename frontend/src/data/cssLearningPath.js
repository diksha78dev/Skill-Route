const cssLearningPath = {
  hero: {
    title: "CSS Fundamentals",
    subtitle: "Master styling and layout techniques to build beautiful web pages.",
    audience: "Learn selectors, box model, flexbox, grid, and responsive design."
  },
  topics: [
    {
      id: "selectors",
      title: "Selectors",
      shortDescription: "Element, class, ID, attribute selectors and pseudo-classes.",
      subtopics: [
        { id: "element-selectors", title: "Element Selectors" },
        { id: "class-id-selectors", title: "Class & ID Selectors" },
        { id: "attribute-selectors", title: "Attribute Selectors" },
        { id: "pseudo-classes", title: "Pseudo-classes & Pseudo-elements" }
      ]
    },
    {
      id: "box-model",
      title: "Box Model",
      shortDescription: "Understand margin, border, padding, and box-sizing properties.",
      subtopics: [
        { id: "box-model-basics", title: "Box Model Basics" },
        { id: "padding-margin", title: "Padding & Margin" },
        { id: "border-properties", title: "Border Properties" },
        { id: "box-sizing", title: "Box-sizing Property" }
      ]
    },
    {
      id: "flexbox",
      title: "Flexbox",
      shortDescription: "One-dimensional layout with flexible containers and items.",
      subtopics: [
        { id: "flex-container", title: "Flex Container" },
        { id: "flex-items", title: "Flex Items" },
        { id: "flex-direction", title: "Flex Direction & Wrap" },
        { id: "flex-alignment", title: "Justify & Align" }
      ]
    },
    {
      id: "grid",
      title: "Grid",
      shortDescription: "Two-dimensional layout system for complex page designs.",
      subtopics: [
        { id: "grid-container", title: "Grid Container" },
        { id: "grid-items", title: "Grid Items" },
        { id: "grid-template", title: "Grid Template Columns & Rows" },
        { id: "grid-areas", title: "Grid Areas" }
      ]
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      shortDescription: "Create mobile-friendly designs using media queries and viewport.",
      subtopics: [
        { id: "viewport-meta", title: "Viewport Meta Tag" },
        { id: "media-queries", title: "Media Queries" },
        { id: "mobile-first", title: "Mobile-first Approach" },
        { id: "responsive-units", title: "Responsive Units" }
      ]
    }
  ]
};

export default cssLearningPath;
