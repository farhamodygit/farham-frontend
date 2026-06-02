import { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import {
  getProfileImage,
  uploadProfileImage,
} from "../api/api";

function ProfileUpload({ sizeClass = "w-24 h-24", hideUpload = false }) {
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] =
    useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await getProfileImage();

        if (response.data.imageUrl) {
          setImage(response.data.imageUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };

    void fetchProfileImage();
  }, []);

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (
      !file.type.startsWith("image/")
    ) {
      setError(
        "Only image files are allowed."
      );
      return;
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      setError(
        "Image must be less than 5MB."
      );
      return;
    }

    try {
      setUploading(true);
      setError("");

      const formData =
        new FormData();

      formData.append(
        "image",
        file
      );

      const response =
        await uploadProfileImage(
          formData
        );

      setImage(
        response.data.imageUrl
      );
    } catch (error) {
      console.log(error);

      setError(
        error.response?.data
          ?.message ||
          "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={() =>
            image &&
            setShowModal(true)
          }
          className={`${sizeClass} rounded-full p-[3px] bg-gradient-to-r from-primary via-primary-dark to-primary-dark shadow-2xl shadow-primary/30 cursor-pointer hover:scale-105 transition duration-300`}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center border border-border">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <h1 className="text-2xl font-bold text-primary">
                FJ
              </h1>
            )}
          </div>
        </div>

        {!hideUpload && (
          <label className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white cursor-pointer shadow-lg hover:scale-110 transition duration-300">
            {uploading ? (
              <span className="text-xs">
                ...
              </span>
            ) : (
              <FaPlus />
            )}

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={uploadImage}
            />
          </label>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <button
            onClick={() =>
              setShowModal(false)
            }
            className="absolute top-8 right-8 text-white text-3xl"
          >
            <FaTimes />
          </button>

          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileUpload;