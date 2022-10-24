return (
  <header className="container-fluid">
    <Link to="/">
      <Link to="/" className="imgHeader">
        AdoPet
      </Link>
      <img src={logo} alt="Logo" />
    </Link>
    <ul className="list">
      <li className="item">
        <Link className="listItem " to="/">
          Home
        </Link>
      </li>
      <li className="item">
        <Link className="listItem " to="/posts">
          Pets
        </Link>
      </li>
      <li className="item">
        <Link className="listItem " to={props.logt}>
          {props.login}
        </Link>
      </li>
      <li className="item">
        <Link className="listItem " to={props.regt}>
          {props.account}
        </Link>
      </li>
      <li className="item">
        <Link className="listItem " to="/about">
          Sobre
        </Link>
      </li>
    </ul>
  </header>
);
