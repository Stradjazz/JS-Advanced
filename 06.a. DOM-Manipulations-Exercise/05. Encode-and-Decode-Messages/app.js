function encodeAndDecodeMessages() {
    document.querySelector('main').addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.nodeName = 'BUTTON') {
            //nameri parent
            const parent = e.target.parentNode;
            const buttonType = e.target.textContent;
            const textArea = parent.querySelector('textarea');
            const message = textArea.value;
            const outputArea = document.querySelector('textarea[placeholder="No messages..."]');
            let outputMessage = '';
            if (buttonType.includes('Encode')) {
                outputArea.value = encode(message, outputMessage);
                textArea.value = '';
            } else {
                outputArea.value = decode(message, outputMessage);
            }
            function encode(inMsg, outMsg){
                for (let i = 0; i < inMsg.length; i++) {
                    outMsg += String.fromCharCode(inMsg.charCodeAt(i) + 1);    
                }
                return outMsg;
            }
            function decode(inMsg, outMsg){
                for (let i = 0; i < inMsg.length; i++) {
                    outMsg += String.fromCharCode(inMsg.charCodeAt(i) - 1);
                }
                return outMsg;
            }
            console.log(outputMessage);
            
            //вземи тип бутон и текст
            //ако е за кодиране -> кодирай и принтирай
            //ако е за разкодиране -> прочети и принтирай
        }
    }
}