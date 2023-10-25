// server.ts
import express from 'express';
import { Request, Response, NextFunction } from 'express';

//
const username = 'admin';
const password = 'admin';

function basicAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
      return res.status(401).send('Unauthorized');
    }
    
console.log(authHeader)
const encodedCredentials = authHeader.split(' ')[1];
console.log(encodedCredentials)
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
  const [providedUsername, providedPassword] = decodedCredentials.split(':');

  if (providedUsername === username && providedPassword === password) {
    return next();
  } else {
    return res.status(401).send('Unauthorized');
  }
}
//

const app = express();
const port = 3000;

app.use(express.json());

// Apply basic authentication middleware to specific routes
app.get('/secure-data', basicAuthMiddleware, (req, res) => {
  res.send('This is secure data.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
