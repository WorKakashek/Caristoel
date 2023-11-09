const Header = () => {
  window.addEventListener("scroll", () => {
    document.body.style.cssText = `--scrollTop:${scrollY}px`;
  });
  return (
    <div className="MyHeader">
      <div className="MyLayres">
        <div className="Mytext">
          <h1 className="Mytitle">Caristoel</h1>
          <p className="MYunder-title">Create your own 3D model car</p>
        </div>
        <div className="Mylayer Mylayer-main"></div>
        <div className="Mylayer Mylayer-middle"></div>
        <div className="Mylayer Mylayer-first"></div>
      </div>
    </div>
  );
};

export default Header;
