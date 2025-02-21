import React, { useRef, useState } from "react";

const PDFStampTool = () => {
  const [file, setFile] = useState<File, null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [stamps, setStamps] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  const pdfRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const addStamp = () => {
    setStamps([...stamps, { id: stamps.length + 1, x: 50, y: 50 }]);
  };

  return <div>PDFStampTool</div>;
};

export default PDFStampTool;
