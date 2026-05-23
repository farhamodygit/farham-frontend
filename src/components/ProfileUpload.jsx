import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTimes } from "react-icons/fa";

function ProfileUpload() {

  // PROFILE IMAGE
  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  // MODAL STATE
  const [showModal, setShowModal] = useState(false);

  // SAVE IMAGE
  useEffect(() => {

    if (image) {

      localStorage.setItem("profileImage", image);

    }

  }, [image]);

  // UPLOAD IMAGE
  const uploadImage = async (e) => {

    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "upload_preset",
      "portfolio_upload"
    );

    try {

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dh0ypk7ur/image/upload",
        formData
      );

      setImage(res.data.secure_url);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <>

      {/* PROFILE */}
      <div className="relative">

        {/* PROFILE IMAGE */}
        <div
          onClick={() => image && setShowModal(true)}
          className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/30 animate-pulse cursor-pointer hover:scale-105 transition duration-300"
        >

          <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">

            {image ? (

              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />

            ) : (

              <h1 className="text-2xl font-bold text-cyan-400">

                FJ

              </h1>

            )}

          </div>

        </div>

        {/* UPLOAD BUTTON */}
        <label className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white cursor-pointer shadow-lg hover:scale-110 transition duration-300">

          <FaPlus />

          <input
            type="file"
            hidden
            onChange={uploadImage}
          />

        </label>

      </div>

      {/* IMAGE MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-8 right-8 text-white text-3xl hover:text-cyan-400 transition"
          >

            <FaTimes />

          </button>

          {/* ROUND IMAGE PREVIEW */}
          <div className="flex justify-center items-center">

            <div className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 bg-slate-950 overflow-hidden flex items-center justify-center">

              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-contain object-center p-2"
              />

            </div>

          </div>

        </div>

      )}

    </>

  );
}

export default ProfileUpload;