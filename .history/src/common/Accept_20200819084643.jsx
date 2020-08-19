import React from 'react';
import {useDropzone} from 'react-dropzone';

function Accept(props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: ".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  const acceptedFileItems = acceptedFiles.map(file => {
    // 上传文件
    console.log(file);
    // let serverURL = "http://localhost:9093/manage/bi/uploadExcelTest"
    // const xhr = new XMLHttpRequest();
    // const fd = new FormData();
    // xhr.addEventListener("load", null, false);
    // fd.append("file", file);
    // xhr.open("POST", serverURL, true);
    // xhr.send(fd);

    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    )
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    console.log(file);
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map(e => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
  )});

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragAccept && (<p>All files will be accepted</p>)}
        {isDragReject && (<p>Some files will be rejected</p>)}
        {!isDragActive && (<p>Drop some files here ...</p>)}
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.xls and *.xlsx file will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

export default Accept