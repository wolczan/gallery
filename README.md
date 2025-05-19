# 📌 Task & Post Manager App

A simple React + Firebase application that lets users manage tasks and posts in real-time, with user authentication and responsive design.

## 🚀 Features

- Add and delete tasks
- User authentication (login/logout)
- Add and display posts with thumbnail previews (Open Graph)
- Real-time data sync with Firestore
- Context-based user session handling
- Responsive UI using Tailwind CSS

## 🛠️ Tech Stack

- **React** – UI framework
- **Firebase** – Authentication, Firestore (real-time database), Hosting
- **Firestore** – Cloud NoSQL database for real-time sync
- **Tailwind CSS** – Utility-first CSS framework

## 🔐 Authentication

Authentication is handled via a custom `AuthProvider` using React Context API:
- Exposes the current user object
- Provides login/logout functions
- Maintains user state across components

## 🗃️ Firestore Integration

- Fetches posts from the `posts` collection
- Allows submitting new posts to Firestore
- Auto-generates post thumbnails via Open Graph data
- Real-time synchronization of tasks and posts across users/devices

## ⚙️ Installation

```bash
git clone https://github.com/wolczan/gallery.git
cd your-project-name
