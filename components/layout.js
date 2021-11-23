import Box from "./box";
import { Credits } from "./credits";
import { Header } from "./header";

export function Layout({ children, className, ...props }) {
  return (
    <>
      <div className="min-h-screen container p-4 mx-auto">
        <Header />
        <Box marginT-8 className={`${className}`} {...props}>
          {children}
        </Box>
      </div>
    </>
  );
}
