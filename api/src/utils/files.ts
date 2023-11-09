import fs from 'fs';
import path from 'path';

const files = {
  read: async (path: string, encoding?: BufferEncoding) => {
    const content = await fs.promises.readFile(path);
    return content.toString(encoding);
  },
  getExtension: (filename: string) => {
    return path.extname(filename);
  },
  getPublicPath: (filename: string) => {
    return path.join(__dirname, '../../public/files', filename);
  },
  getFileSize: (filename: string) => {
    return fs.statSync(filename).size;
  }
}

export default files;