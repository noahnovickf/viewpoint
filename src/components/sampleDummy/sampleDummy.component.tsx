import React from "react";

type Props = {
  text: String;
};

const SampleDummy = ({ text }: Props) => {
  return <div className="w-full max-w-md">DUMB COMPONENT - {text}</div>;
};

export default SampleDummy;
