const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000, () => {
	console.log('Server is listening on port 3000');
});
