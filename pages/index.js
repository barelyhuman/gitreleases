import Box from "components/box";
import { Credits } from "components/credits";
import { Layout } from "components/layout";
import UsernameInputForm from "containers/username-input";

export default function Home() {
  return (
    <>
      <Layout className="min-h-screen flex flex-col items-end justify-center">
        <UsernameInputForm marginB-16 autoFocus={true} />
      </Layout>
    </>
  );
}
