// ... (código previo)
import { readDataFromExcel } from './excelHandler.js';
import { readDataFromDictionary } from './jsonHandler.js';

// ... (código previo)

// Función para combinar los datos de empleados con sus empresas y áreas correspondientes
export const combinedData = async () => {
	try {
		const excelData = await readDataFromExcel(); // Obtener datos del archivo Excel
		const dictionaryData = await readDataFromDictionary(); // Obtener datos del diccionario

		const combinedData = {};

		// Recorrer los datos del archivo Excel
		for (const employee of excelData) {
			const { ID_EMPRESA } = employee;

			// Verificar si la empresa ya existe en el objeto combinado
			if (!combinedData[ID_EMPRESA]) {
				// Si la empresa no existe, inicializa un objeto para la empresa
				combinedData[ID_EMPRESA] = {
					EMPRESA: dictionaryData.find(company => company.ID_EMPRESA === ID_EMPRESA),
					EMPLEADOS: [],
				};
			}

			// Añadir el empleado al array de empleados de la empresa
			combinedData[ID_EMPRESA].EMPLEADOS.push(employee);
		}

		return combinedData;
	} catch (error) {
		throw new Error('Error al combinar los datos:', error.message);
	}
};

// ... (resto del código)

// ... (resto del código)

/* import { readDataFromExcel } from './excelHandler.js';
import { readDataFromDictionary } from './jsonHandler.js';

export const combinedData = async () => {
	try {
		const excelData = await readDataFromExcel(); // Obtener datos del archivo Excel
		const dictionaryData = await readDataFromDictionary(); // Obtener datos del diccionario

		// Combinar los datos utilizando un campo común, por ejemplo, ID_EMPRESA
		const combinedData = excelData.map(excelItem => {
			const matchingDictionaryItem = dictionaryData[excelItem.ID_EMPRESA];

			if (matchingDictionaryItem) {
				return {
					...excelItem,
					...matchingDictionaryItem,
				};
			}

			return excelItem;
		});

		return combinedData;
	} catch (error) {
		throw new Error('Error al combinar los datos:', error.message);
	}
}; */

// combinedData();
