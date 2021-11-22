import { formatDate, formatTime } from "lib/date";
import Box from "./box";

import { marked } from "marked";

const baseClass = "overflow-hidden rounded-lg shadow-md";

export default function ReleaseCard({ data, className, ...props }) {
  const releaseName = data.name || data.tag_name;
  const author = data.author || {};
  const authorName = author.login || "N/A";
  const authorLink = author.html_url || "#";
  const repoName = (data.repo && data.repo.name) || "N/A";
  const classList = `${baseClass} ${className}`;

  const changeLogHTML = {
    __html: marked(data.body),
  };

  return (
    <>
      <Box className={classList} padding-8 {...props}>
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          {releaseName} - <a>{repoName}</a>
        </h2>
        <p className="leading-normal text-gray-700">
          <span className="text-gray-500 mr-2">Released On:</span>
          {formatDate(data.published_at)} | {formatTime(data.published_at)}
        </p>
        <p className="mt-2">
          <span className="text-gray-500 mr-2">Released By:</span>
          <a
            className="inline-flex text-gray-600 underline"
            href={authorLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {authorName}
          </a>
        </p>
        <h3 class="mt-3 mb-2 text-lg font-semibold tracking-tight text-gray-800">
          Changelog
        </h3>
        <p
          class="leading-normal pr-2 text-gray-700"
          dangerouslySetInnerHTML={changeLogHTML}
        ></p>
      </Box>
    </>
  );
}
