import express from 'express';

import App from './components/App/App';

const app = express();

// routes(app);

app.use("/", (req, res) => {
    const page = new App();
    res.send(page.renderPage());
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})