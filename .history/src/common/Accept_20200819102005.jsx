import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import './Accept.scss'

function Accept(props) {
  const [uploaded, setUpload] = useState({uploaded: false})
  const [progress, setProgress] = useState({progress: "0%"})
  const [info, setInfo] = useState({info: ""})
  const [curr, setFile] = useState('')

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
  
  useEffect(()=>{
    // let serverURL = "http://localhost:9093/manage/bi/uploadExcelTest"
    // const xhr = new XMLHttpRequest();
    // const fd = new FormData();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //       console.log(xhr.responseText)
    //       setInfo(xhr.responseText)   
    //   }
    // };

    // xhr.upload.addEventListener("progress", function(event) {
    //   if(event.lengthComputable){
    //       setProgress(Math.ceil(event.loaded * 100 / event.total) + "%")
    //   }
    // }, false);

    // fd.append("file", file);
    // xhr.open("POST", serverURL, true);
    // xhr.send(fd); 
    console.log(curr)
  }, [curr])
  
  const acceptedFileItems = acceptedFiles.map(file => {
    // 上传文件
    //console.log(file);
    if(curr == '') {
      setFile(file.name)
    }
    else {
      if(curr === file.name)
        console.log('ignore')
      else {
        setFile(file.name)
      }
    }

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
        {/* <div class="progress-bar">
          <div class="progress"  id="progress" style="{width: ${progress}}"></div>
        </div>
        <p id="info" innerHTML={info}></p> */}
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