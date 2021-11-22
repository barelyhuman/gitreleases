export function Input({ className, ...props }) {
  const classList = `w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline ${className}`;
  return (
    <>
      <input className={classList} {...props} />
    </>
  );
}
