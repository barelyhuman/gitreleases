import { useRouter } from "next/router";
import { useState } from "react";
import Box from "components/box";
import { Input } from "components/input";
import { Button } from "components/button";

export default function UsernameInputForm({ autoFocus, value, ...props }) {
  const [username, setUsername] = useState(value || "");
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
      setLoading(false);
    }, 250);
  };

  return (
    <>
      <Box className="w-full flex items-center justify-center" {...props}>
        <form onSubmit={handleSubmit}>
          <Box className="flex w-full flex-col items-center justify-center">
            <label className="leading-normal font-semibold text-gray-600 text-base">
              Github Username
              <Input
                autoFocus={autoFocus}
                name="username"
                value={username}
                placeholder="eg: barelyhuman"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <Button
              margin-8
              loading={loading}
              type="submit"
              disabled={loading || !username.length}
            >
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
