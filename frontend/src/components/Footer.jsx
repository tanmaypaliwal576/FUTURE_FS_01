import React from "react";
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Tanmay Paliwal. All rights reserved.</p>
      <p className="text-sm mt-2">
        <a
          href="https://github.com/tanmaypaliwal576"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a href="mailto:tanmaypaliwal2006@outlook.com" className="underline">
          Contact
        </a>
      </p>
    </footer>
  );
}
