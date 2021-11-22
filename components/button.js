export function Button({ children, className, ...props }) {
  const classList = `h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 ${className}`;
  return (
    <>
      <button className={classList} {...props}>
        {children}
      </button>
    </>
  );
}
