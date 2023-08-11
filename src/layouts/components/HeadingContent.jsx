import iconTentang from "../../assets/img/icon/tentang_kami.png";

const HeadingContent = ({
  icon = iconTentang,
  author = "Putri Rahmasari",
  role = "Mahasiswi Pendidikan Kimia USK",
  title,
}) => {
  return (
    <div className="heading-content">
      <div className="author">
        <div className="user-img">
          <img src={icon} alt="user foto" />
        </div>
        <div className="user-info">
          <h3>{author}</h3>
          <p>{role}</p>
        </div>
      </div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default HeadingContent;
