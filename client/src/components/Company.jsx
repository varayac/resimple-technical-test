import Accordion from './Accordion';
import { useContext } from 'react';
import { ApiDataContext } from '../context/apiDataContext';

function Company() {
	const { dictionaryData } = useContext(ApiDataContext);
   console.log('Datos de dictionaryData:', dictionaryData);

	return (
		<>
			{dictionaryData && (
				<div>
					{dictionaryData.EMPRESAS.map(company => (
						<Accordion key={company.ID_EMPRESA} company={company} />
					))}
				</div>
			)}
		</>
	);
}

export default Company;
