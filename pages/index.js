import { useRouter } from "next/router";
import { useState } from "react";
import Box from "components/box";
import { Input } from "components/input";
import { Layout } from "components/layout";
import { Button } from "components/button";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/user/${username}`);
  };

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit}>
          <Box className="flex flex-wrap items-center">
            <Input
              className="w-9/12"
              name="username"
              value={username}
              placeholder="eg: barelyhuman"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit">Get Releases</Button>
          </Box>
        </form>
      </Layout>
    </>
  );
}
