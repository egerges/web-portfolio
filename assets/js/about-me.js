document.addEventListener("DOMContentLoaded", () => {
    function DownloadFile() {
        const FILENAME = "Elio Gerges_Resume.pdf";
        //Set the File URL.
        var url = "/assets/resume/" + FILENAME;

        //Create XMLHTTP Request.
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "blob";
        req.onload = function () {
            //Convert the Byte Data to BLOB object.
            var blob = new Blob([req.response], { type: "application/octetstream" });

            //Check the Browser type and download the File.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob, FILENAME);
            } else {
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob);
                var a = document.createElement("a");
                a.setAttribute("download", FILENAME);
                a.setAttribute("href", link);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        };
        req.send();
    };

    function SendEmail() {
        var name = document.getElementById("name").value;
        alert(`Welcome ${name},\nAn email with your information has been sent to Elio Gerges.\nWe will be contacting you shortly.`);
    }

    document.getElementById("btnDownloadResume").addEventListener("click", DownloadFile);
    document.getElementById("btnSendEmail").addEventListener("click", SendEmail);
});