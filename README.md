# 📬 Mini Message Board
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)
![EJS](https://img.shields.io/badge/EJS-Template_Engine-green?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Fullstack Learning](https://img.shields.io/badge/Fullstack-Development-blue?style=for-the-badge)


A simple message board built using **PostgreSQL**, **Node.js**, **Express**, and **EJS**.
Deployed with Render (PaaS)

Live preview 👉 <a href="https://mini-messageboard-4kua.onrender.com/">Click here</a>

---

## 🚀 Overview
This project is part of **The Odin Project** curriculum, focusing on building a basic **Express.js** web application. The goal was to learn how to:
- Set up an **Express server**
- Use **EJS** for templating
- Handle **GET and POST requests**
- Work with **form submissions**
- Set up and use a database, **PostgreSQL** (Extra)

---

![messageBoard](https://github.com/user-attachments/assets/f497ed08-eb2d-4b45-a51e-a00f52c2fd2c)

## 🛠 Features
- 📝 Display a list of messages on the homepage
- ✍️ Submit new messages using a form
- 🔄 Messages persist in-memory (stored in an array)
- 👤 Each message includes an automatically generated **id**, **username**, **text**, and **timestamp**
- 🔗 Open individual messages via a dynamic route to display on a details page

## 🏗 Project Structure

```
MESSAGEBOARD/
├── node_modules/               # Installed dependencies
├── public/                     # Static files (CSS, icons)
│   ├── icons/                   # SVG icons
│   ├── styles.css               # Main stylesheet
├── routes/                     # Express route handlers
│   ├── index.js                 # Handles main routes
│   ├── newMessage.js            # Handles new message routes
├── views/                      # EJS templates
│   ├── partials/                # Reusable components
│   │   ├── footer.ejs
│   │   ├── head.ejs
│   │   ├── header.ejs
│   ├── form.ejs                  # New message form page
│   ├── index.ejs                 # Homepage with messages
│   ├── messageDetails.ejs        # Individual message details
├── .gitignore                   # Ignore node_modules and other files
├── app.js                        # Main server setup
├── messages.js                   # Stores message data
├── package.json                  # Project metadata and dependencies
├── package-lock.json              # Dependency lock file
├── README.md                      # Project documentation
```

---

## 🛠 Technologies Used
- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **EJS** – Templating engine
- **CSS** – Basic styling

---

## 📖 What I Learned
- ✅ Setting up an **Express.js** server
- ✅ Rendering dynamic content using **EJS**
- ✅ Handling **GET and POST requests**
- ✅ Using **Express middleware** (e.g., `express.urlencoded`) for form parsing
- ✅ Implementing **basic routing**
- ✅ Working with **template variables** in EJS


💡 Developed as part of my Fullstack Developer journey! 🚀

