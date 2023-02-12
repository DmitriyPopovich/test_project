export class MFile {
	originalname: string;
	buffer: Buffer;

	constructor(file: any) {
		this.originalname = file.originalname;
		this.buffer = file.buffer;
	}
}