export const Contact = () => {
    return ( 
        <div className="contact">
        <div className="card-container">
                <div className="card-content">
                <div className="card-title">
                    <h1>Contact Me:</h1><br></br>
            <div className="card-body">
            <form>
                <rows>
                     <cols lg="6" className="form-group">
                       <input
                       className="form-control"
                       id="name"
                       name="name"
                       placeholder="Name"
                       type="text"
                       />
                     </cols>
                     <cols lg="6" className="form-group">
                       <input
                       className="form-control"
                       id="email"
                       name="email"
                       placeholder="Email"
                       type="text"
                       />
                     </cols>
                 </rows>
                <textarea className="form control rounded-0" cols="90" id="message"
                                   name="message"
                                   placeholder="message"
                                   rows={5}>
                                   </textarea>
            </form> 
            <button className="btn">Send</button>
                </div>
            </div>
            </div>
        </div>
        <div className="outer">
                <h1>GET IN TOUCH</h1><br></br>
                <p><b>EMAIL: atienogabriela72@gmail.com</b></p><br></br><br></br>
                <p><b>PHONE NUMBER: 0798282409</b></p><br></br><br></br>
                <p><b>LINKEDIN: </b></p><br></br>
            </div>
        </div>
     );
}
 
export default Contact;