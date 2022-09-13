import 'dotenv/config';
import App from './App';

const PORT = Number(process.env.PORT);

const app = new App();

app.start(PORT);
