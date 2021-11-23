export function Loader() {
  return (
    <>
      <span className="loader"></span>
      <style jsx>
        {`
          .loader {
            display: block;
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: solid 2px transparent;
            border-top-color: inherit;
            border-left-color: inherit;
            border-bottom-color: #efefef;
            border-right-color: #efefef;
            border-radius: 50%;
            -webkit-animation: loader 400ms linear infinite;
            animation: loader 400ms linear infinite;
          }

          @-webkit-keyframes loader {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes loader {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
}
