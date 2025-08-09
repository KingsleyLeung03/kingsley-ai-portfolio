# Kingsley's AI-Powered Personal Portfolio

This is the source code for my personal portfolio website. It's a modern, responsive single-page application built with Next.js and TypeScript, designed to showcase my skills, experience, and projects in an interactive way.

A key feature of this site is the AI-powered chatbot that can answer questions about my professional background based on the content of my resume and other provided documents.

## ✨ Features

- **Interactive AI Assistant**: A chatbot that can answer questions about my skills, experience, and projects.
- **Detailed "About Me" Page**: A comprehensive overview of my work experience, projects, education, and skills.
- **Downloadable Documents**: Easy access to my CV and academic transcript.
- **Blog Section**: A space for articles and thoughts on technology, AI, and web development.
- **Photo Gallery**: A visual showcase of my photography, with images sorted by date.
- **Fully Responsive Design**: Looks great on desktops, tablets, and mobile devices.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI**: [Google Gemini](https://ai.google.dev/) via OpenAI SDK compatibility layer
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Deployment**: Vercel / Firebase App Hosting / Docker

## Local Development

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Bun](https://bun.sh/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Navigate to the project directory
    ```sh
    cd your_repository
    ```
3.  Install NPM packages
    ```sh
    bun install
    ```
4.  Create a `.env` file in the root of the project and add your Gemini API key:
    ```.env
    GEMINI_API_KEY=your_api_key_here
    ```
5.  Run the development server
    ```sh
    bun dev
    ```
    The application will be available at `http://localhost:9002`.

## Continuous Integration

This project uses GitHub Actions for Continuous Integration. The workflow is defined in `.github/workflows/ci.yml` and includes the following checks:

-   **Linting**: Ensures code style and quality standards are met.
-   **Build**: Verifies that the application builds successfully.
-   **Docker Build**: Confirms that the Docker image can be built without errors.

These checks are run automatically on every `push` and `pull_request` to the `main` branch across multiple operating systems:
-   Ubuntu (latest)
-   macOS (latest)
-   Windows (latest)

## Containerisation

A `Dockerfile` is included to containerise the application for easy deployment.

### Build the Docker image

```sh
docker build -t kingsley-portfolio .
```

### Run the Docker container

```sh
docker run -p 3000:3000 kingsley-portfolio
```
The application will be available at `http://localhost:3000`.

## 📂 Project Structure

- `src/app/`: Contains the main pages of the application using the Next.js App Router.
- `src/components/`: Shared React components, including UI components from ShadCN.
- `src/ai/`: Contains the logic for the AI chatbot.
- `public/`: Static assets like images, fonts, and documents.
- `posts/`: Markdown files for the blog.
- `gallery/`: Image files for the photo gallery.
- `.github/workflows/`: Contains the CI workflow files.
- `Dockerfile`: Defines the container for the application.

