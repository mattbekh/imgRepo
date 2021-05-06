import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError]  = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        // Select a single file for upload
        let selected = e.target.files[0];

        // If we have a file, and if file is png / jpeg
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            // Clear the error message
            setError("");
        } else { 
            // Uploaded something invalid or nothing at all
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    }

    return (
        <form> 
            <label>
                <input type = "file" onChange = {changeHandler} />
                <span>ADD</span>
            </label>
            
            <div className = "output">
                { error && <div className="error">{error}</div> }
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
}

export default UploadForm;