import octokit from "./octokit";

export async function getRepositoryLatestRelease(owner, repo) {
  const { data } = await octokit.rest.repos.listReleases({
    owner,
    repo,
  });

  const lastRelease = data.length > 0 ? data[0] : null;

  return lastRelease;
}
