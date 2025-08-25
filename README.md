# TODO List Application

A fully functional TODO list application built with **React.js** and connected to a backend API. This project allows users to add, delete, and manage tasks, with all changes synced to the server in real-time.

---

## Features

* Add tasks by pressing **Enter** or using the add button
* Delete individual tasks with a hover-activated delete icon
* Automatic API sync whenever a task is added or deleted
* "Clear All Tasks" button deletes the list from the server and updates the front-end
* Displays *"No tasks, add a task"* when the list is empty
* Unlimited tasks supported
* No edit functionality (tasks must be deleted and re-added)

---

## Getting Started

This project was bootstrapped from the **React.js boilerplate**. To run it locally:

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## Backend API

This project is connected to a backend API that keeps tasks in sync.

* Adding a task updates both the server and front-end
* Deleting a task removes it from the server and front-end
* The "Clear All Tasks" button clears the list on the server and resets the front-end

---

## Built With

* **React.js** – Frontend framework
* **Fetch API** – Server communication
* **CSS** – Styling and interactions
