import { useRef, useState } from "react";
import photo from "../../assets/User Picture.png";
import pencil from "../../assets/Pencil Icon.png";
import ProgressBar from "./progressBar";

function BusinessCustomization() {
  const [image, setImage] = useState();
  const imageRef = useRef();

  const handleChangeImage = async () => {
    const file = imageRef.current.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setImage(base64Image);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <ProgressBar />
      <div className="space1"></div>
      <h1>Business Customization</h1>
      <p>Show off your business with some pictures!</p>
      <div>
        <input
          type="file"
          ref={imageRef}
          style={{ display: "none" }}
          onChange={handleChangeImage}
        />
        <img
          src={pencil}
          alt={"photo"}
          className="photo avatar"
          onClick={() => imageRef.current.click()}
          style={{ backgroundColor: "transparent" }}
        />
        <div></div>
        <img
          src={image || photo}
          alt={"photo"}
          className="photo avatar"
          onClick={() => imageRef.current.click()}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </>
  );
}

export default BusinessCustomization;
