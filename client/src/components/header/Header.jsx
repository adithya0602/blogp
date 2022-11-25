import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">WELCOME</span>
        <span className="headerTitleLg">BLOGGER</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/originals/5e/76/0c/5e760cba5e9ca01ed6249f1ea49cb104.png"
        alt=""
      />
    </div>
  );
}