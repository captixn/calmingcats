import * as React from "react";

export const Credits = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div className="credits">
      <strong>Made by love by:</strong>
      <p>
        Author :{" "}
        <a href="https://www.linkedin.com/in/acvkp/">Alexandre Pinon</a>
      </p>
      <p>
        Co-author :{" "}
        <a href="https://www.instagram.com/revsociety_/">Aurore Jacques</a>{" "}
      </p>
      <br />
      <p><strong>With the contribution of :</strong></p>
      <p>Marie &amp; Léo, John Doe</p>
    </div>
  );
});

export const Copyright = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div className="copyright">
      <p>
        Made by love by{" "}
        <a href="/catlovers" ref={ref} onClick={onClick}>
          cat lovers
        </a>
      </p>
    </div>
  );
});
