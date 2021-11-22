import Box from "components/box";
import { Layout } from "components/layout";
import ReleaseCard from "components/release-card";
import { getRepositoryLatestRelease } from "lib/get-repository-releases";
import { getUserRepositories } from "lib/get-user-repositories";

export default function UserPage({ releases, username }) {
  return (
    <>
      <Layout>
        <h1 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          Showing recent releases from: {username}
        </h1>
        <Box className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {releases.map((releaseItem) => (
            <ReleaseCard key={releaseItem.id} data={releaseItem} />
          ))}
        </Box>
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
