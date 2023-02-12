import { useState } from "react";
import { storage } from "../lib/firebase";

export default function Storage() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const { files } = e.target;
    const file = files[0];
    setFile(file);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    const location = `/images/${file.name}`;
    const uploadTask = storage.ref(location).put(file);
    uploadTask.on("state_changed", handleSnapshot, handleError, handleComplete);

    function handleSnapshot(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    };

    function handleError(error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          console.log(error.message);
          break;
        case "storage/canceled":
          // User canceled the upload
          console.log(error.message);
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log(error.message);
          break;
      }
    };

    function handleComplete() {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => console.log(url));
    };
  };
  return (
    <div className="container">
      <form onSubmit={uploadFile}>
        <input
          type="file"
          name="file"
          placeholder="File"
          accept="image/*"
          onChange={handleFile}
          required="required"
        />
        <button type="submit">Upload File</button>
      </form>
    </div>
  );
}
