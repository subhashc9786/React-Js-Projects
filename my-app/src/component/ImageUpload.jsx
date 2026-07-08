import { useState } from "react";

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    console.log(preview)
    // Handle File Selection
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        setImage(file);

        // Create a preview URL
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
    };

    // Handle Image Upload
    const handleUpload = async () => {
        if (!image) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            console.log("Upload Success:", result);
        } catch (error) {
            console.error("Upload Error:", error);
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && <img src={preview} alt="Preview" width="150" />}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}
