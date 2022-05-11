import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./socialLinks.css";

const SocialLinks = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/danealexhoffmann/">
        <FontAwesomeIcon
          className="icon"
          icon={faLinkedin}
          size="3x"
        ></FontAwesomeIcon>
      </a>
      <a href="https://github.com/danealexhoffmann">
        <FontAwesomeIcon
          className="icon"
          icon={faGithubSquare}
          size="3x"
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.instagram.com/danealexhoffmann/">
        <FontAwesomeIcon
          className="icon"
          icon={faInstagramSquare}
          size="3x"
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.behance.net/danealexhoffmann">
        <FontAwesomeIcon
          className="icon"
          icon={faBehanceSquare}
          size="3x"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default SocialLinks;
