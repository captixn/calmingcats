import * as React from "react";

export const Credits = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div className="credits">
      <p>
        <strong>
          Do you have photos and soothing quotes that you want to feature?
        </strong>
      </p>
      <p>
        Drop an email at <br />
        <a href="mailto:calmingcatsme@gmail.com">calmingcatsme@gmail.com</a>
      </p>
      <br />
      <p>
        <strong>This app with made with love by:</strong>
      </p>
      <p>
        Author :{" "}
        <a href="https://www.linkedin.com/in/acvkp/">Alexandre Pinon</a>
      </p>
      <p>
        Co-author :{" "}
        <a href="https://www.instagram.com/revsociety_/">Aurore Jacques</a>{" "}
      </p>
      <br />
      <p>
        <strong>With the contribution of :</strong>
      </p>
      <p>Marie &amp; Léo, John Doe</p>
      <p>Cindy and <a href="/_next/image?url=%2Fcats%2FIMG_8484.JPG&w=828&q=100">her cat</a></p>
      <p>Natasha and <a href="/_next/image?url=%2Fcats%2Fimage5.jpeg&w=828&q=100">Luna</a></p>
    </div>
  );
});

export const Copyright = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div className="copyright">
      <p>
        Want your cat to{" "}
        <a href="/catlovers" ref={ref} onClick={onClick}>
          become a Calming Cat?
        </a>
      </p>
    </div>
  );
});
