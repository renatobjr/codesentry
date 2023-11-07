import apiResponse from "../../utils/apiResponse";
import fileUtils from "../../utils/files";
import fs from 'fs';

const upload = async (files: any) => {
  let renamedFiles: any = [];
  try {
    files.forEach((file:any, index:number) => {
      
      const ext = fileUtils.getExtension(file.originalname);
      const originalPath = fileUtils.getPublicPath(file.filename);

      const filename = `${file.filename}${ext}`;
      fs.renameSync(
        originalPath,
        fileUtils.getPublicPath(filename)
      );

      const renamedPath = fileUtils.getPublicPath(filename);

      renamedFiles.push(
        { filename, originalname: file.originalname, createdAt: new Date(), size: fileUtils.getFileSize(renamedPath)}
      );
    });
    return apiResponse('file/upload', 200, renamedFiles)
  } catch (error) {
    return apiResponse('file/upload', 500, 'Internal Server Error')
  }
}

export default upload