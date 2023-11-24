import { createContext, useState, useEffect } from 'react';
import { getDictionaryData, getExcelData } from '../api/apidata.js'

const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
	const [dictionaryData, setDictionaryData] = useState(null);
	const [excelData, setExcelData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dictionary = await getDictionaryData();
				setDictionaryData(dictionary);

				const excel = await getExcelData();
				setExcelData(excel);
			} catch (error) {
				console.error('Error fetching data:', error.message);
			}
		};

		fetchData();
	}, []);

	const contextValue = {
		dictionaryData,
		excelData,
	};

	return (
      <ApiDataContext.Provider value={contextValue}>
         {children}
      </ApiDataContext.Provider>
      )
};

export { ApiDataContext, ApiDataProvider };
