# 📚 Book Vibe — Book Discovery & Reading List

Book Vibe is a modern, responsive book discovery and reading-list management application designed for book lovers. It allows users to explore books, view detailed information, organize their reading lists, and keep track of their reading activities.

Built with **Next.js 16, React 19, and TypeScript**, Book Vibe provides an intuitive reading experience with dynamic routing, reusable components, and centralized state management.

## 🌐 Project Links

- **GitHub Repository:** [Book Vibe](https://github.com/ireenhoque/book-vibe)

## ✨ Key Features

- **Book Discovery:** Browse a collection of books with relevant information and cover images.
- **Book Details:** Explore individual books through dynamic routes with detailed descriptions and book information.
- **Reading List:** Add books to a personal reading list for future reading.
- **Read Books:** Maintain a separate collection of books marked as read.
- **Book Management:** Organize and manage reading lists through interactive controls.
- **Dynamic Routing:** Navigate between book listings and individual book detail pages using Next.js App Router.
- **Global State Management:** Manage shared book data and reading-list state using React Context API.
- **Responsive Design:** Enjoy a consistent browsing experience across desktop, tablet, and mobile devices.
- **Interactive UI:** User-friendly navigation, reusable components, and smooth interactions.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | daisyUI 5 |
| State Management | React Context API |
| Routing | Next.js App Router |
| Data Fetching | Fetch API |
| Data Source | Custom Books API |
| Image Handling | Next.js Image |
| Fonts | Noto Serif Bengali |
| Deployment | Vercel |

## 📁 Application Routes

| Route | Description |
|---|---|
| `/` | Homepage featuring the book discovery experience |
| `/books` | Browse the available book collection |
| `/books/[id]` | View individual book details |
| `/listed-books` | Manage the personal reading list |
| `/read-books` | View books marked as read |

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- Access to the Book Vibe backend API

### 1. Clone the Repository

```bash
git clone https://github.com/ireenhoque/book-vibe.git
```

### 2. Navigate to the Project Directory

```bash
cd book-vibe
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root.

Configure the backend API URL:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:8000
```

Replace the local URL with your deployed backend API URL when running the production application.

**Important:** Never expose private credentials or sensitive API keys through `NEXT_PUBLIC_` environment variables.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🏗️ Architecture & Implementation

Book Vibe follows a component-based architecture with centralized state management.

- **Next.js App Router:** Organizes application pages and dynamic book routes.
- **React Context API:** Shares book and reading-list state across components.
- **Reusable Components:** Keeps the interface modular and maintainable.
- **Backend Integration:** Retrieves book data through the configured API.
- **Image Optimization:** Uses Next.js Image for displaying book covers.

## ☁️ Deployment

The application can be deployed on **Vercel**.

To deploy your own instance:

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables.
3. Set `NEXT_PUBLIC_SERVER_BASE_URL` to the production backend URL.
4. Deploy the application.

## 👩‍💻 Author

**Ireen Hoque**

- GitHub: [@ireenhoque](https://github.com/ireenhoque)

---

**Book Vibe — Discover Books. Organize Your Reading.**
