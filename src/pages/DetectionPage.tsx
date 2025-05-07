import React, { useState, useRef } from 'react';
import { Upload, AlertTriangle, Check, Info, X } from 'lucide-react';

const DetectionPage: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    status: 'positive' | 'negative' | 'inconclusive' | null;
    confidence: number;
    message: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      analyzeImage();
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate analysis with a delay
    setTimeout(() => {
      // Mock result - in a real app, this would come from an AI model
      const mockResults = [
        {
          status: 'negative',
          confidence: 96,
          message: 'No signs of abnormalities detected.',
        },
        {
          status: 'positive',
          confidence: 89,
          message: 'Potential signs detected. Please consult a healthcare provider.',
        },
        {
          status: 'inconclusive',
          confidence: 60,
          message: 'Results are inconclusive. Better quality images may be needed.',
        },
      ] as const;
      
      // Randomly select a result
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Colon Cancer Detection Tool
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Upload colonoscopy images or scans for AI-powered analysis and early detection.
              This tool helps identify potential signs of colon cancer with advanced image recognition.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Important Disclaimer</h3>
                  <p className="mt-1 text-sm text-yellow-700">
                    This tool is meant for educational purposes only and is not a replacement for 
                    professional medical advice, diagnosis, or treatment. Always consult with a qualified 
                    healthcare provider about any medical concerns.
                  </p>
                </div>
              </div>

              {!uploadedImage ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center transition-colors ${
                    isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  <Upload className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Upload your medical image
                  </h3>
                  <p className="text-sm text-gray-500 text-center mb-6">
                    Drag and drop your colonoscopy image or scan here, or click to browse files
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                  >
                    Select File
                  </label>
                  <p className="mt-3 text-xs text-gray-500">
                    Supported formats: JPG, PNG, TIFF, DICOM
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative">
                    <button
                      onClick={handleReset}
                      className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-opacity-100 transition-colors"
                      aria-label="Remove image"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <img
                      src={uploadedImage}
                      alt="Uploaded medical image"
                      className="w-full h-auto max-h-96 object-contain rounded-lg"
                    />
                  </div>

                  {isAnalyzing ? (
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Analyzing Image
                      </h3>
                      <p className="text-sm text-blue-600">
                        Our AI is carefully examining the uploaded image for potential signs...
                      </p>
                    </div>
                  ) : result ? (
                    <div className={`rounded-lg p-6 ${
                      result.status === 'positive' 
                        ? 'bg-red-50' 
                        : result.status === 'negative'
                        ? 'bg-green-50'
                        : 'bg-yellow-50'
                    }`}>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                          result.status === 'positive' 
                            ? 'bg-red-100' 
                            : result.status === 'negative'
                            ? 'bg-green-100'
                            : 'bg-yellow-100'
                        }`}>
                          {result.status === 'positive' ? (
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                          ) : result.status === 'negative' ? (
                            <Check className="h-6 w-6 text-green-600" />
                          ) : (
                            <Info className="h-6 w-6 text-yellow-600" />
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className={`text-lg font-medium ${
                            result.status === 'positive' 
                              ? 'text-red-800' 
                              : result.status === 'negative'
                              ? 'text-green-800'
                              : 'text-yellow-800'
                          }`}>
                            {result.status === 'positive' 
                              ? 'Potential Signs Detected' 
                              : result.status === 'negative'
                              ? 'No Signs Detected'
                              : 'Inconclusive Results'}
                          </h3>
                          <div className="mt-2">
                            <p className={`text-sm ${
                              result.status === 'positive' 
                                ? 'text-red-700' 
                                : result.status === 'negative'
                                ? 'text-green-700'
                                : 'text-yellow-700'
                            }`}>
                              {result.message}
                            </p>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-700 mr-2">
                                Confidence:
                              </span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    result.status === 'positive' 
                                      ? 'bg-red-500' 
                                      : result.status === 'negative'
                                      ? 'bg-green-500'
                                      : 'bg-yellow-500'
                                  }`}
                                  style={{ width: `${result.confidence}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-700">
                                {result.confidence}%
                              </span>
                            </div>
                          </div>

                          <div className="mt-6 bg-white bg-opacity-70 rounded p-4 border border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-800 mb-2">
                              Next Steps:
                            </h4>
                            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                              <li>This analysis is for informational purposes only</li>
                              <li>Consult with a healthcare provider for proper diagnosis</li>
                              <li>Regular screenings are essential for early detection</li>
                              <li>Document this result and share it with your doctor</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={analyzeImage}
                      className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Analyze Image
                    </button>
                  )}

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                    >
                      Upload New Image
                    </button>
                    {result && (
                      <button
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                        onClick={() => {
                          // In a real app, this would save or export the results
                          alert('Results saved successfully');
                        }}
                      >
                        Save Results
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <span className="font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload</h3>
                <p className="text-gray-600 text-sm">
                  Upload your colonoscopy image or medical scan through our secure system.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <span className="font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analyze</h3>
                <p className="text-gray-600 text-sm">
                  Our AI technology analyzes the image to identify potential signs of colon cancer.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <span className="font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Receive instant results with recommendations for next steps based on the analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionPage;