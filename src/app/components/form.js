'use client'
import React, {useState} from 'react';
import styles from '@/app/styles/components.module.css'

const Form = () => {
    const [serviceType,
        setServiceType] = useState('writing');
    const [email,
        setEmail] = useState("")
        const [countryCode, setcountryCode] = useState('')
        const [phone, setphone] = useState('')
        const [deadline, setDeadline] = useState('') 
        const [subjectCode, setsubjectCode] = useState('')
        const [description, setdescription] = useState('')
        const [isChecked, setIsChecked] = useState(false);
    const [files,
        setFiles] = useState([]) 
    const [NoofPages,
        setNoofPages] = useState({pages: 1, pgText: "Pages", words: 250, wordText: "No. of words"})

console.log("checked");
console.log(isChecked);


    const incPg = () => {
        var page = NoofPages.pages + 1;
        var word = NoofPages.words + 250;
        setNoofPages({
            ...NoofPages,
            pages: page,
            words: word
        })

    }
    const decPg = () => {
        if (NoofPages.pages <= 1) 
            return;
        
        var page = NoofPages.pages - 1;
        var word = NoofPages.words - 250;
        setNoofPages({
            ...NoofPages,
            pages: page,
            words: word
        })

      

    }
    const SubmitForm = ()=>{

    }
    return ( <> <div className='formouter'> 
            <div className={styles.formmain}>

                <div className={styles.formheader}>
                    <p>Its time you sought help from assignmentpoint.com Experts</p>
                    <div className={styles.servicetype}> 
                            <label>
                                <input
                                    type="radio"
                                    value="writing"
                                    checked={serviceType === 'writing'}
                                    onChange={(e) => setServiceType(e.target.value)}/> writing </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Rewriting"
                                    checked={serviceType === 'Rewriting'}
                                    onChange={(e) => setServiceType(e.target.value)}/> Rewriting
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Editing"
                                    checked={serviceType === 'Editing'}
                                    onChange={(e) => setServiceType(e.target.value)}/> Editing
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
                        <label> Phone :
                        <select
                            showSearch
                            size="large"
                            onChange={(e) => setcountryCode(e.target.value)}
                        >     <option value="+1">United States (+1)</option>
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
                            <input type="text" value={NoofPages.pages + " " + NoofPages.pgText + " / " + NoofPages.words + " " + NoofPages.wordText} // onChange={(e) => setEmail(e.target.value)
                      required></input>
                            <i className="ri-add-line" onClick={incPg}></i>
                            <i onClick={decPg} className="ri-subtract-fill"></i>
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
                        <textarea row={60} cols={50} value={description}   onChange={(e) => setdescription(e.target.value)} />
                        </label>
                        <label>Upload Files:
                        <input
                            type="file"
                            multiple
                            onChange={(e) => setFiles([
                            ...files,
                            e.target.files
                        ])} 
                        style={{display:"none"}}
                            className="form-control" 
                            name="files[]"
                            required/> {files.length || 0} files</label>
                    </div>
                </div>

                <div className={styles.formfooter}>
                <input type="checkbox" checked={isChecked}  onChange={(e) => setIsChecked(!isChecked)} /><p>&ensp; I accept the T&C and other policies of the website and agree to receive offers and updates.</p>
                        </div>
                        <button onClick={SubmitForm}> Free Asistance</button>

            </div> 
    </div> </>
    )}

export default Form;