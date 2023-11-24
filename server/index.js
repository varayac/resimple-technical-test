import express from 'express';
import { readDataFromExcel } from './src/dataHandlers/excelHandler.js';
import { readDataFromDictionary } from './src/dataHandlers/jsonHandler.js';

console.clear();
const app = express();

app.get('/exceldata', async (req, res) => {
	try {
		const data = await readDataFromExcel();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.get('/dictionarydata', async (req, res) => {
	try {
		const data = await readDataFromDictionary();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// app.get('/combined', async (req, res) => {
// 	try {
// 		const data = await combinedData();
// 		res.status(200).json(data);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
