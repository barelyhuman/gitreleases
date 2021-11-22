import { Octokit } from "@octokit/rest";

let octokit;

if (!octokit) {
  octokit = new Octokit({
    baseUrl: "https://api.github.com",
    auth: "" + process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });
}

export default octokit;
