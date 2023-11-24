import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const datafiles = `${__dirname}/../../datafiles/`;

export const readDataFromDictionary = async () => {
	try {
		const dictionaryFile = join(`${datafiles}/diccionario-de-datos.json`);
		const data = await fs.readFile(dictionaryFile, 'utf-8');
		const dictionaryData = JSON.parse(data);
		// console.log(dictionaryData);
		return dictionaryData;
	} catch (error) {
		console.error('Error al leer los datos del diccionario de datos:', error);
		throw error;
	}
};
