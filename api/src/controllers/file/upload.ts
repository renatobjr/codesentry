import file from '../../models/file/'

const upload = async (req: any, res: any) => {
  res.send(await file.upload(req.files))
}

export default upload;