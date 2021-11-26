import Box from "./box";
import { Credits } from "./credits";
import { Header } from "./header";

export function Layout({ children, className, ...props }) {
  return (
    <>
      <div className="h-full container p-4 mx-auto">
        <Header />
        <Box marginT-8 className={`h-4/5 ${className}`} {...props}>
          {children}
        </Box>
      </div>
    </>
  );
}
