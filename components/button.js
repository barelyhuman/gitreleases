import { theme } from "config/theme";
import { Loader } from "./loader";

export function Button({ children, loading, className, ...props }) {
  let classList = `h-10 px-5 m-2 transition-shadow duration-150 rounded-lg hover:shadow-md focus:shadow-outline ${className}`;
  classList;
  return (
    <>
      <button className={classList} {...props}>
        {loading ? <Loader /> : children}
      </button>
      <style jsx>
        {`
          button {
            background: ${theme.base.dark};
            color: ${theme.text.light};
          }

          button:hover {
            background: ${theme.base.dark};
            color: ${theme.text.light};
          }

          button.secondary {
            border: 2px solid ${theme.base.dark};
            background: ${theme.base.light};
            color: ${theme.text.dark};
          }

          button.ghost {
            border: 0px;
            background: ${theme.base.light};
            color: ${theme.text.dark};
          }

          button.ghost:hover {
            background: ${theme.primary.light};
            box-shadow: none;
          }

          button:disabled {
            background: ${theme.disabled.default};
            color: ${theme.disabled.light};
          }
        `}
      </style>
    </>
  );
}
