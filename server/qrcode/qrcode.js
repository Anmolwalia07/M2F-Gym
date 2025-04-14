import qrcode from "qrcode"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const generateQr=(props)=>{
    const pathtodirectory=path.join(__dirname,"/public/registerQr")
    const {data}=props;
    const {name}=props;
    qrcode.toFile(
        `${pathtodirectory}/${name}.png`,
        data,)
        return `${pathtodirectory}/${name}.png`
}

export default generateQr;
