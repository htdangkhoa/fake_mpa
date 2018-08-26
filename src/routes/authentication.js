import { Router } from 'express';
import authenticationSuccess from '../jsons/authenticationSuccess';
import authenticationFail from '../jsons/authenticationFail';

const router = Router();

router.post('/submitAuthentication', (req, res) => {
  const { type, userId, password } = req.query;

  if (userId === 'mpancs04' && password === '1' && type === '1') {
    return res.status(200).json(authenticationSuccess);
  }

  return res.status(200).json(authenticationFail);
});

export default router;
