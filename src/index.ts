import http from 'http';
import cors from "cors";
import express, { Application, Request, Response } from "express";

import swaggerUi from 'swagger-ui-express';
import apiOpenApi from "./index.openapi";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({ 'status': 'heathy' })
})

app.get("/openapi/json", (req: Request, res: Response) => {
  return res.status(200).header('content-type', 'application/json').json(apiOpenApi);
});

app.use('/openapi',
  swaggerUi.serve, swaggerUi.setup(apiOpenApi, { explorer: true })
);

app.use("*", (req: Request, res: Response) => {
  return res.status(200).json({
    'statusCode': 404,
    'statusName': 'NOT_FOUND',
    'statusMessage': 'The requested resource could not be found.'
  })
});

export const server = http.createServer(app);
server.listen(5000, () => { console.log(`App listening on port 5000`); });