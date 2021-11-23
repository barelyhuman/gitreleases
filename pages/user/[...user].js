import Box from "components/box";
import { Credits } from "components/credits";
import { Layout } from "components/layout";
import ReleaseCard from "components/release-card";
import UsernameInputForm from "containers/username-input";
import { getRepositoryLatestRelease } from "lib/get-repository-releases";
import { getUserRepositories } from "lib/get-user-repositories";

export default function UserPage({ releases, username }) {
  return (
    <>
      <Layout>
        <UsernameInputForm marginB-24 value={username} />
        <h1 className="text-right text-xl font-semibold tracking-tight text-gray-500">
          Showing recent releases from:{" "}
          <span className="text-black">{username}</span>
        </h1>
        <Box className="grid gap-2 grid-cols-1 md:grid-cols-3">
          {releases.map((releaseItem) => (
            <ReleaseCard key={releaseItem.id} data={releaseItem} />
          ))}
        </Box>
        <Credits />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const username = params.user;

  const repos = await getUserRepositories(username);
  const releasePromises = repos.map((repoItem) => {
    return getRepositoryLatestRelease(username, repoItem.name).then((data) => {
      if (!data) {
        return;
      }
      return {
        ...data,
        repo: {
          ...repoItem,
        },
      };
    });
  });
  const releases = (await Promise.all(releasePromises)).filter((x) => x);

  return {
    props: {
      username,
      releases: releases,
    },
  };
}
