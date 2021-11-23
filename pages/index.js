import { useRouter } from "next/router";
import { useState } from "react";
import Box from "components/box";
import { Input } from "components/input";
import { Layout } from "components/layout";
import { Button } from "components/button";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      router.push(`/user/${username}`);
    }, 250);
  };

  return (
    <>
      <Layout className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <Box className="flex flex-wrap items-center justify-center">
            <Input
              className="w-9/12"
              name="username"
              value={username}
              placeholder="eg: barelyhuman"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Button disabled={loading} loading={loading} type="submit">
              Get Releases
            </Button>
          </Box>
        </form>
      </Layout>
    </>
  );
}
