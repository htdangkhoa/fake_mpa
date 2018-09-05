import { Router } from 'express';
import authenticationSuccess from '../jsons/authenticationSuccess';
import authenticationFail from '../jsons/authenticationFail';
import submitChangePassword from '../jsons/submitChangePassword';
import submitChangePasswordError from '../jsons/submitChangePasswordError';
import submitChangePasswordSuccess from '../jsons/submitChangePasswordSuccess';

const router = Router();

router.post('/submitAuthentication', (req, res) => {
  const { type, userId, password } = req.body;

  if (userId === 'mpancs04' && password === '1' && type === '1') {
    return res.status(200).json(authenticationSuccess);
  }

  return res.status(200).json(authenticationFail);
});

router.post('/submitChangePassword', (req, res) => {
  const {
    type, userId, oldPassword, newPassword,
  } = req.body;

  if (userId !== 'mpancs05' || oldPassword !== '1') {
    return res.json(submitChangePassword);
  }

  if (oldPassword === '1' && newPassword === oldPassword) {
    return res.json(submitChangePasswordError);
  }

  if (type === '2' && userId === 'mpancs05' && oldPassword === '1' && newPassword !== oldPassword) {
    return res.json(submitChangePasswordSuccess);
  }

  return res.json(global.errors);
});

export default router;
