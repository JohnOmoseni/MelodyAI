import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const basicStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2.5em 1em",
  borderWidth: "2px",
  borderStyle: "dashed",
  borderColor: "#666666",
  backgroundColor: "#333",
  color: "#bdbdbd",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  minHeight: "30vh",
  outline: "none",
  borderRadius: "3px",
  transition: "border .24s ease-in",
  cursor: "pointer",
};

const focusStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "green",
};

const rejectStyle = {
  borderColor: "red",
};

export default function Dropzone({ file, setPreview, setFile }) {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const file = new FileReader();
    file.onload = () => {
      setPreview(file?.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
    setFile(acceptedFiles[0]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isFocused,
  } = useDropzone({ onDrop });

  const style = useMemo(() => {
    return {
      ...basicStyles,
      ...(isFocused ? focusStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    };
  }, [isFocused, isDragAccept, isDragReject]);

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-neutral-400">Drag the files here....</p>
      ) : file?.name ? (
        <p className="my-2 px-3 text-neutral-400 text-center text-sm">
          {file?.name}
        </p>
      ) : (
        <p className="text-neutral-500 text-center">
          Drag 'n' drop some files here or click to select the files
        </p>
      )}
    </div>
  );
}
