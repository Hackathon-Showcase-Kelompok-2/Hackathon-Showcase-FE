import React from 'react';

function UploadProject() {
    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className="flex items-center text-black justify-center min-h-screen bg-white">
            <div className="w-full max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-semibold text-center mb-8">Upload Project Tim</h1>
                <div className="mb-8">
                    <button
                        id="uploadButton"
                        className="w-full py-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        onClick={handleUploadClick}
                    >
                        <i className="fas fa-plus"></i> Upload Project
                    </button>
                    <input type="file" id="fileInput" className="hidden" />
                </div>
                <div className="flex flex-wrap justify-start space-x-4 mb-8">
                    <button className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition duration-300">
                        Ubah Email
                    </button>
                    <button className="px-6 bg-white py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition duration-300">
                        Ubah Password
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="updateInfo" className="mr-2" />
                    <label htmlFor="updateInfo" className="text-sm">
                        Saya bersedia menerima update informasi dari Galaxy Hackathon
                    </label>
                </div>
            </div>
        </div>
    );
}

export default UploadProject;