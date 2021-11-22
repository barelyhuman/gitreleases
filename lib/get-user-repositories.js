import octokit from "./octokit";

export async function getUserRepositories(username) {
  //  fetch repositories from github
  const { data } = await octokit.rest.repos.listForUser({
    username,
    per_page: 10,
    page: 0,
    sort: "updated",
  });
  return data;
}
