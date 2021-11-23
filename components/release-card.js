import { distanceFromNow, formatDate, formatTime } from "lib/date";
import Box from "./box";

import { marked } from "marked";
import Card from "./card";

const baseClass = "overflow-hidden rounded-lg shadow-md";

export default function ReleaseCard({ data, className, ...props }) {
  const releaseName = data.name || data.tag_name;
  const author = data.author || {};

  const authorData = {
    name: author.login || "N/A",
    link: author.html_url || "#",
    avatar: author.avatar_url || "",
  };

  const repoName = (data.repo && data.repo.name) || "N/A";
  const classList = `${baseClass} ${className}`;

  const changeLogHTML = {
    __html: marked(data.body),
  };

  return (
    <Card>
      <div className="flex space-x-6 items-center">
        <div>
          <p className="font-semibold text-base">
            {releaseName} | <span className="text-gray-500">{repoName}</span>
          </p>
          <p className="font-semibold text-sm text-gray-400">
            <a href={authorData.link} target="_blank" rel="noopener noreferrer">
              {authorData.name}
            </a>
          </p>
          <p className="font-semibold text-xs text-gray-400">
            {distanceFromNow(data.published_at)}
          </p>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <a href={data.html_url} target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-100 text-gray-300 transition-colors hover:text-gray-800 rounded-md p-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </a>
      </div>
    </Card>
  );
}
