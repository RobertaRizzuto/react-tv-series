
import "./index.css";
import language from "./language.png"
import chat from "./bubble-chat.png"

const Footer = () => {
  return (
  <main className="footer">
<section className="first">
  <img src={language}  className="icon" alt="translate icon" />
</section>

<section className="second">
  <ul>
    <li>
      <a href="">Terms & conditions </a>
    </li>
    <li className="separator">|</li>
    <li>
      <a href="">Privacy policy </a>
    </li>{" "}
    <li className="separator">|</li>
    <li>
      <a href="">Cookie</a>
    </li>
  </ul>
</section>

<section className="third">
  <img src={chat} className="icon" alt="chat icon" />
</section>
</main>
  
  );
};

export default Footer;