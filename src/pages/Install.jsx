import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Install() {

    const [osSystem, setOsSystem] = useState("abc");
    const [showWindows10, setShowWindows10] = useState(false);
    const [showMacOs, setShowMacOs] = useState(false);
    const [showUbuntu, setShowUbuntu] = useState(false);
    const [showWindows7, setShowWindows7] = useState(false);
    const [showOthers, setShowOthers] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        switch (osSystem) {
            case "windows10":
                setShowWindows10(true);
                setShowMacOs(false);
                setShowUbuntu(false);
                setShowWindows7(false);
                setShowOthers(false);
                break;
            case "macOs":
                setShowMacOs(true);
                setShowWindows10(false);
                setShowUbuntu(false);
                setShowWindows7(false);
                setShowOthers(false);
                break;
            case "ubuntu":
                setShowUbuntu(true);
                setShowWindows10(false);
                setShowMacOs(false);
                setShowWindows7(false);
                setShowOthers(false);
                break;
            case "windows7":
                setShowWindows7(true);
                setShowWindows10(false);
                setShowMacOs(false);
                setShowUbuntu(false);
                setShowOthers(false);
                break;
            case "other":
                setShowOthers(true);
                setShowWindows10(false);
                setShowMacOs(false);
                setShowUbuntu(false);
                setShowWindows7(false);
                break;
        }

    }

    const Windows10 = () => {
        return (
            <div>
                <hr className="my-4" />
                <h4> This is for users of windows 10! <br />
                Please go to the below link to get the software downloaded. 
                    <a href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a>
                </h4>
            </div>
        );
    }

    const MacOs = () => {
        return (
            <div>
                <hr className="my-4" />
                <h4> This is for users of MacOs! <br />
                Please go to the below link to get the software downloaded. 
                    <a href="https://developer.apple.com/xcode">https://developer.apple.com/xcode </a>
                </h4>
            </div>
        );
    }

    const Ubuntu = () => {
        return (
            <div>
                <hr className="my-4" />
                <h4> This is for users of Ubuntu! <br />
                Please go to the bleow link to get the software downloaded. 
                    <a href="https://www.vim.org/download.php">https://www.vim.org/download.php</a>
                </h4>
            </div>
        );
    }

    const Windows7 = () => {
        return (
            <div>
                <hr className="my-4" />
                <h4> This is for users of Windows 7! <br />
                    Please go to the below link to get the software downloaded.
                    <a href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a>
                </h4>
            </div>
        );
    }

    const Other = () => {
        return (
            <div>
                <hr className="my-4" />
                <h4> This is for users of other operating system! <br />
                Please go to the below link for more information that you may need.
                    <a href="https://en.wikipedia.org/wiki/Integrated_development_environment">https://en.wikipedia.org/wiki/Integrated_development_environment</a>
                </h4>
            </div>
        );
    }

    return (
        <div className='install' >
            <Form onSubmit={handleSubmit}>
                <div className="py-5 text-left">

                    <h2>Install Software</h2>
                    <p className="lead">Follow the prompts below to install the necessary software to allow remote assistance. </p>
                </div>
                <div>
                    <h4>Select your operating system. </h4>
                    <hr className="my-4" />
                    <h4 className="mb-3">Operating System</h4>

                    <div className="my-3">
                        <div className="form-check">
                            <input id="windows10" name="osSystem" type="radio" className="form-check-input" value="windows10" onChange={() => setOsSystem("windows10")} checked={osSystem === "windows10"} required />
                            <label className="form-check-label" for="windows10">Windows 10</label>
                        </div>

                        <div className="form-check">
                            <input id="MacOS" name="osSystem" type="radio" className="form-check-input" value="macOs" onChange={() => setOsSystem("macOs")} checked={osSystem === "macOs"} required />
                            <label className="form-check-label" for="MacOS">MacOS</label>
                        </div>

                        <div className="form-check">
                            <input id="LinuxUbuntu" name="osSystem" type="radio" className="form-check-input" value="ubuntu" onChange={() => setOsSystem("ubuntu")} checked={osSystem === "ubuntu"} required />
                            <label className="form-check-label" for="LinuxUbuntu">Linux Ubuntu</label>
                        </div>

                        <div className="form-check">
                            <input id="Windows7" name="osSystem" type="radio" className="form-check-input" value="windows7" onChange={() => setOsSystem("windows7")} checked={osSystem === "windows7"} required />
                            <label className="form-check-label" for="Windows7">Windows 7</label>
                        </div>

                        <div className="form-check">
                            <input id="Other" name="osSystem" type="radio" className="form-check-input" value="other" onChange={() => setOsSystem("other")} checked={osSystem === "other"} required />
                            <label className="form-check-label" for="Other">Other</label>
                        </div>

                    </div>

                    <div className="Button">
                        <Button variant="primary" size="lg" type="submit">
                            Next
                        </Button>
                    </div>
                </div>
            </Form>

            {showWindows10 && <Windows10 />}
            {showMacOs && <MacOs />}
            {showUbuntu && <Ubuntu />}
            {showWindows7 && <Windows7 />}
            {showOthers && <Other />}

        </div>
    );
}

export default Install;