import fs from 'fs';
import path from 'path';

const files = {
  read: async (path: string, encoding?: BufferEncoding) => {
    const content = await fs.promises.readFile(path);
    return content.toString(encoding);
  }
}

export default files;