# Timeline project

## Description

Design and implement a component for visualizing events on a timeline.

## Setup and Installation

### Prerequisites

- Node.js (version 20.18.0)
- npm

### Installation Steps

1. Clone the repository

```bash
git clone git@github.com:Vakero08/timeline-project.git
cd your-project
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm start
```

## Development Insights

### Time Spent

- Total time spent on the assignment: [5-6 hours]

### Task Completed

- Allow zooming in and out of the timeline. ✅
- Allow dragging and dropping to change the start date and/or end date for an event. ✅
- Allow editing the name of events inline.✅

### Design Decisions

- For the color theme, I searched in adobe colors, a palette that more or less adapts to a timeline of events, I did it in dark theme.
- For the design I was inspired by several designs that I previously reviewed on the dribble.com website. Which helped me to establish a clear idea of the final product I wanted to achieve.

### Implementation Highlights

- What I liked about my implementation
  - I loved using CSS Grid to position all the elements. First I proposed an option to put everything with absolute positions, but I found it more simple, manageable and understandable to use CSS Grid to position the elements.
  - I really like the implementation of the zoom, since it is not a scaling, like the browser zoom, it is more personalized, the elements are enlarged giving the user a feeling that he is browsing the timeline.

### Potential Improvements

- What I would change if doing the project again
  - I would use typescript to improve the development process and not make type errors, which happened to me a lot not having typescript.
  - Improve the animation when doing the drag, it is a little strange, it works but it is not as fluid as I would like.
  - I have to add the drag of elements, that you can drag a complete event to another date.
  - Look for how to improve the readability of the code so that it is a little more understandable, I believe that there are parts where it could improve
  - Add style to the timeline grid, adding referential lines to the grid.

### Future Testing Strategies

If given more time, I would enhance testing by:

- Adding comprehensive unit tests
- Implementing integration tests

## Project Structure

```
project-root/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── mock-data/
│   ├── utils/
│   └── App.jsx
│
├── public/
├── vite.config.js
└── package.json
```

## Technologies Used

- Vite
- React
- Tailwind CSS
- NextUI Library

## License

[Specify license, e.g., MIT]
