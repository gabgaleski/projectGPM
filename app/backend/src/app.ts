import express from 'express';
import routes from './Routes';

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.app.get('/', (req, res) => res.json({ ok: true }))
    }

    private routes(): void {
        this.app.use(routes)
    }

    private config(): void {
        this.app.use(express.json());
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server running on port ${port}`))
    }

}

export default App;