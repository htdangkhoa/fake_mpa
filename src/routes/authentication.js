import { Router } from 'express';
import authenticationSuccess from '../jsons/authenticationSuccess';
import authenticationFail from '../jsons/authenticationFail';

const router = Router();

router.post('/submitAuthentication', (req, res) => {
  const { type, userId, password } = req.body;

  if (userId === 'mpancs04' && password === '1' && type === '1') {
    return res.json(authenticationSuccess);
  }

  return res.json(authenticationFail);
});

export default router;
