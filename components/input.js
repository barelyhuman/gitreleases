import { colors, theme } from "config/theme";

export function Input({ className, ...props }) {
  const classList = `w-full px-4 py-2 text-lg text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-transparent ${className}`;
  return (
    <>
      <input className={classList} {...props} />
      <style jsx>
        {`
          input {
            min-width: 250px;
            border: 2px solid ${theme.disabled.default};
          }

          input::placeholder {
            color: ${theme.text.lighter};
          }

          input:focus {
            border-color: ${theme.base.dark};
          }
        `}
      </style>
    </>
  );
}
