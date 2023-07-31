import { port } from "./config/config.js";
import app from './server.js';

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});