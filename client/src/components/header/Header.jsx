import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ytimg.com/vi/QBk9jnLUgZ0/maxresdefault.jpg"
        alt=""
      />
    </div>
  );
}
