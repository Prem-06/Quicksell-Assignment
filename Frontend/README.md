# Interactive Kanban Board Application

## Description

This project is an interactive Kanban board application built using React.js. It interacts with the provided API from [QuickSell API](https://api.quicksell.co/v1/internal/frontend-assignment) to manage and display tickets dynamically. The application allows users to group and sort tickets in various ways, providing a flexible and user-friendly experience for managing tasks. Additionally, the application saves the user's view state even after page reload.

## Features

- **Dynamic Grouping**: Users can group tickets based on three criteria:
  1. **By Status**: View tickets based on their current status (e.g., In Progress, Todo, Backlog).
  2. **By User**: Organize tickets according to the assigned user.
  3. **By Priority**: Group tickets based on their priority level (e.g., No Priority, Low, Medium, High, Urgent).

- **Sorting Options**: Users can sort the displayed tickets in two ways:
  1. **Priority**: Arrange tickets in descending order of priority.
  2. **Title**: Sort tickets in ascending order based on their title.

- **Responsive Design**: The Kanban board is designed to be visually appealing and responsive, ensuring a seamless experience on both desktop and mobile devices.

- **View State Persistence**: The application saves the user's selected grouping and sorting options in the session storage, allowing the state to persist even after page reloads.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Prem-06/Quicksell-Assignment.git
   cd <project-directory>
   npm install
   npm run dev



