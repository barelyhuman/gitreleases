import Box from "./box";

export function Layout({ children, ...props }) {
  return (
    <Box padding-16 className="container mx-auto" {...props}>
      {children}
    </Box>
  );
}
