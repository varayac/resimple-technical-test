const URL_BASE = 'https://localhost:3000/';
const DICTIONARY_DATA = `${URL_BASE}/dictionarydata`;
const EXCEL_DATA = `${URL_BASE}/exceldata`;

const fetchData = async entity => {
	try {
		const response = await fetch(entity);
		if (!response.ok)
			throw new Error(`La solicitud falló con el código de estado ${response.status}`);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(`Ocurrió un error: ${error.message}`);
	}
};

const getDictionaryData = async () => {
	try {
		const data = await fetchData(DICTIONARY_DATA);
      console.log('DICTIONARY_DATA', data)
		return data;
	} catch (error) {
		throw new Error(`Error al obtener los datos del diccionario: ${error.message}`);
	}
};

const getExcelData = async () => {
	try {
		const data = await fetchData(EXCEL_DATA);
		return data;
	} catch (error) {
		throw new Error(`Error al obtener los datos de Excel: ${error.message}`);
	}
};

export { getDictionaryData, getExcelData };
