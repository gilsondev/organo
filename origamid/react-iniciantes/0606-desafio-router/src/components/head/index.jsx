import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    if (props.title && props.description) {
      document.title = props.title;
      document.querySelector('meta[name="description"]').content =
        props.description;
    }
  }, [props]);
  return <></>;
};

export default Head;
