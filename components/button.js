import { theme } from "config/theme";
import { modsToStyle } from "spacery";
import { Loader } from "./loader";

export function Button({ children, loading, className, ...props }) {
  let classList = `transition-shadow duration-150 rounded-lg hover:shadow-md focus:shadow-outline ${className}`;
  const { style, sanitizedProps } = modsToStyle(props);
  return (
    <>
      <button style={style} className={classList} {...sanitizedProps}>
        {loading ? <Loader /> : children}
      </button>
      <style jsx>
        {`
          button {
            min-height: 40px;
            padding: 0 16px;
            font-size: 14px;
            line-height: 27px;
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
