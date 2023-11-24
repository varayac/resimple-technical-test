import xslx from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const datafiles = `${__dirname}/../../datafiles/`;

export const readDataFromExcel = async () => {
	try {
		const filePath = join(`${datafiles}/origen-datos-junior.xlsx`);
		const fileContent = await fs.readFile(filePath);

		const excelFile = xslx.read(fileContent, { type: 'buffer' });
		const sheet = excelFile.Sheets[excelFile.SheetNames[0]];

		// transform excel data to json:
		const dataFromExcel = xslx.utils.sheet_to_json(sheet);
		// console.log(dataFromExcel);
		return dataFromExcel;
	} catch (error) {
		console.error('Error al leer el archivo Excel:', error.message);
		throw error;
	}
};
