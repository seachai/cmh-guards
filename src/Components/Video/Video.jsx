import React from "react";
import MachineGuard from "../../Video/Machine-Guard.mp4";

const Video = () => {
  return (
    <section className="video">
      <video autoPlay muted loop>
        <source src={MachineGuard} type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
