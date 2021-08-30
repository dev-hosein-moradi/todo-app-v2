import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className={`Footer`}>
      <a href="https://www.instagram.com/_.hos.m/">
        <InstagramIcon style={{ margin: "0 10px" }} />
      </a>
      <a href="https://github.com/hosein7379m">
        <GitHubIcon style={{ margin: "0 10px" }} />
      </a>
    </div>
  );
};

export default Footer;
