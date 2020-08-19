import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import './Accept.scss'

function Accept(props) {
  const [curr, setFile] = useState('')
  const [currFile, setCurrFile] = useState(null)

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
    console.log(curr, currFile)
    let serverURL = "http://localhost:9093/manage/bi/uploadExcelTest"
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText)
          setInfo(xhr.responseText)   
      }
    };

    xhr.upload.addEventListener("progress", function(event) {
      if(event.lengthComputable){
          setProgress(Math.ceil(event.loaded * 100 / event.total) + "%")
      }
    }, false);

    fd.append("file", currFile);
    xhr.open("POST", serverURL, true);
    xhr.send(fd); 
  }, [curr])
  
  const acceptedFileItems = acceptedFiles.map(file => {
    // 上传文件, 下面几行代码是为了解决重复上传的问题，因为拖拽时
    // 这个功能不断被调用，文件都是同一个文件所以使用这两个变量来实现
    // 文件上传的动作在useEffect副作用中执行。
    if(curr == '') {
      setFile(file.name)
      setCurrFile(file)
    }
    else {
      if(curr !== file.name) { 
        setFile(file.name)
        setCurrFile(file)
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