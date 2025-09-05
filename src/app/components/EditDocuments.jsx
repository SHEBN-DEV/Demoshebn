import React from "react";
import DocumentUpload from "./DocumentUpload";

const EditDocuments = () => {
    return(
        <div className="w-full flex justify-center items-center pb-20 ">
            <div className="w-full flex flex-col justify-center gap-8 p-6 ">
                <p className="text-xl font-bold mt-4">Upload Documents</p>
                <p className="text-lg">To give credibility to your profile, upload your projects here</p>

                {/*Cargar documentos */}
                <div className="w-full grid  grid-cols-1 md:grid-cols-3 gap-8">
                    <DocumentUpload label="Your Project" inputId="file-upload-1" />
                    <DocumentUpload label="Your Project" inputId="file-upload-2" />
                    <DocumentUpload label="Your Project" inputId="file-upload-3" />
                </div>
            </div>
        </div>
    );
};

export default EditDocuments;