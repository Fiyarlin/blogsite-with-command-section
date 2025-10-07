# 📰 IBM Front-End Blog Site with Comment Section

## 📌 Project Overview

The *Blog Site with comment section* is a responsive and interactive web application that allows users to create, view, and comment on blog posts — all from the browser. It’s built using *HTML, CSS, and JavaScript, with **localStorage* for managing post and comment data.

This project demonstrates how a fully functional blog platform can be created entirely on the *frontend* — without requiring a backend server — while maintaining a smooth, dynamic user experience.

---

## 🎯 Objective

To design and implement an intuitive blog management system that enables users to create, read, and interact with blogs in a seamless, lightweight, and responsive interface.

---

## 🧩 Features

* ✍ *Add Blog:* Users can write and publish blog posts.
* 📄 *View Blog:* Each post has its own detailed page.
* 💬 *Comment Section:* Readers can comment on individual blogs.
* 💾 *LocalStorage Integration:* Data persists locally in the user’s browser.
* 📱 *Responsive Design:* Works on desktops, tablets, and mobile devices.

---

## 🏗 System Architecture


[Client Browser] → [Frontend: HTML, CSS, JS] → [LocalStorage]
             ↓
       [Blog & Comment Handling Logic]
             ↓
     [Rendered Blog Pages & UI Interaction]


---

## 🧠 Technologies Used

* *Frontend:* HTML, CSS, JavaScript
* *Styling:* Custom CSS
* *Storage:* Browser LocalStorage
* *Hosting:* Netlify

---

## ⚙ Folder Structure


📁 blog-site/
│
├── index.html          # Homepage (displays all blogs)
├── add_blog.html       # Page to add a new blog
├── blog.html           # Individual blog detail page
├── style.css           # Styling for all pages
└── script.js           # Logic for adding, displaying blogs & comments


---

## 🧾 Setup Guide

### 💻 Run Locally

1. *Clone the repository:*

   bash
   git clone https://github.com/username/ibm-fe-blog-site.git
   cd ibm-fe-blog-site
   

2. *Open in VS Code or any IDE*

3. *Run locally:*

   * Simply open index.html in your browser.
   * OR use Live Server extension in VS Code.

---

### ☁ Deploy on Netlify

1. Go to [https://app.netlify.com/](https://app.netlify.com/).
2. Click *“Add New Site” → “Import from Git”*.
3. Connect your GitHub repository.
4. Choose the main branch and click *Deploy Site*.
5. Once deployed, your blog is live on a Netlify URL (e.g., https://your-site.netlify.app).

---

## 🚀 Limitations

* Blogs and comments are stored only in *browser localStorage*, meaning:

  * Each visitor sees only their own posts/comments.
  * Blogs do not sync globally across users or devices.

---

## 🔮 Future Enhancements

* 🌐 Integrate *Firebase* or *MongoDB* for global data storage.
* 👥 Add *User Authentication* for personalized blogging.
* ❤ Enable *Likes and Tags* for enhanced engagement.
* 🧰 Create an *Admin Dashboard* for content moderation.

---



*Deployed Link:* [https://helpful-tarsier-181f6c.netlify.app](https://blogsite-with-command-section.netlify.app/)
