'use client'
import React, {useState} from 'react';
import styles from '@/app/styles/components.module.css'
import axios from 'axios';

const Form = () => {
    const [serviceType,
        setServiceType] = useState('writing');
    const [email,
        setEmail] = useState("")
    const [countryCode,
        setcountryCode] = useState('')
    const [phone,
        setphone] = useState('')
    const [deadline,
        setDeadline] = useState('')
    const [subjectCode,
        setsubjectCode] = useState('')
    const [description,
        setdescription] = useState('')
    const [isChecked,
        setIsChecked] = useState(false);
    const [files,
        setFiles] = useState([])
    const [NoofPages,
        setNoofPages] = useState({pages: 1, pgText: "Pages", words: 250, wordText: "No. of words"})

    const changePages = (action) => {
        if (NoofPages.pages <= 1 && action === "dec") {
            return;
        }

        let page;
        let word;

        if (action === "inc") {
            page = NoofPages.pages + 1;
            word = NoofPages.words + 250;
        } else if (action === "dec") {
            page = NoofPages.pages - 1;
            word = NoofPages.words - 250

        }

        setNoofPages({
            ...NoofPages,
            pages: page,
            words: word
        })

    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        console.log("starting");
        try {
            const No_Page = NoofPages.pages + " " + NoofPages.pgText + " " + NoofPages.words + " " + NoofPages.wordText;
            const orderDetails = new FormData();
            orderDetails.append('email', email);
            orderDetails.append('phone', countryCode + ":" + phone);
            orderDetails.append('deadline', deadline);
            orderDetails.append('No_of_pages', No_Page);
            orderDetails.append('subject_code', subjectCode);
            orderDetails.append('description', description);
            orderDetails.append('files', files);

            // const response = await fetch('/api/order', {method:'POST',
            // headers: {"content-type":"application/json"},
            // body:orderDetails})
            const res = await axios.post('http://localhost:8000/api/v1/auth/register-route-two',orderDetails);
console.log(res);
        } catch (error) {
            console.log(error);
            // toast.error("Somthing went wrong .")
        }

    }
    const deleteFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };
    const renderFileList = () => (
        <ol>
            {[...files].map((f, i) => (
                <li key={i}>{f.name}
                    - {f.type}
                    <i className="ri-file-reduce-fill" onClick={() => deleteFile(i)}/></li>
            ))}
        </ol>
    )

    const fileHandler = (e) => {
        var x = e.target.files;
        console.log(x);
        const objectValues = Object.values(x);

        setFiles([
            ...files,
            ...objectValues
        ]);

    }
    return ( 
        <div className={styles.formouter}>
        <div className={styles.formmain}>
            <div className={styles.formheader}>
                <p>Its time you sought help from assignmentpoint.com Experts</p>
                <div className={styles.servicetype}>
                    <label>
                        <input
                            type="radio"
                            value="writing"
                            checked={serviceType === 'writing'}
                            onChange={(e) => setServiceType(e.target.value)}/>
                        &ensp;writing
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Rewriting"
                            checked={serviceType === 'Rewriting'}
                            onChange={(e) => setServiceType(e.target.value)}/>
                        &ensp;Rewriting
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Editing"
                            checked={serviceType === 'Editing'}
                            onChange={(e) => setServiceType(e.target.value)}/>
                        &ensp;Editing
                    </label>

                </div>
            </div>
            <div className={styles.formbody}>
                <div className={styles.formbodyLeft}>
                    <label>Email :
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </label>
                    <br/>
                    <label>
                        Phone :
                        <select
                            showSearch
                            size="large"
                            onChange={(e) => setcountryCode(e.target.value)}>
                            <option value="+1">United States (+1)</option>
                            <option value="+44">United Kingdom (+44)</option>
                            <option value="+91">India (+91)</option>
                        </select>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            maxlength={10}
                            required/>
                    </label>
                    <br/>
                    <label>
                        Deadline :
                        <input
                            type="datetime-local"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            required/>
                    </label>
                    <br/>
                    <label className={styles.nopages}>
                        Number of pages:
                        <input
                            type="text"
                            value={`${NoofPages.pages} ${NoofPages.pgText} / ${NoofPages.words} ${NoofPages.wordText}`}
                            required></input>
                             <i className="ri-subtract-fill" onClick={() => changePages("dec")}/>
                        <i className="ri-add-line" onClick={() => changePages("inc")}/>
                       
                    </label>
                </div>
                <div className={styles.formbodyRight}>
                    <label>subject code:
                        <input
                            type="text"
                            value={subjectCode}
                            onChange={(e) => setsubjectCode(e.target.value)}
                            required/>
                    </label>
                    <br/>
                    <label>Enter Assignment Description:
                        <textarea
                            row={60}
                            cols={50}
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}/>
                    </label>
                    <label>Upload Files:
                        <input
                            type="file"
                            multiple
                            onChange={fileHandler}
                            style={{
                            display: "none"
                        }}
                            required/>{files.length ||0}&ensp;
                        files</label>
                    {renderFileList()}
                </div>
            </div>

            <div className={styles.formfooter}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(!isChecked)}/> 
                <p>  I accept the T&C and other policies of the website and agree to
                    receive offers and updates.</p> 
            </div>
            <button onClick={SubmitForm}>
                Free Asistance
            </button>
        </div>
</div> 
    )}

export default Form;