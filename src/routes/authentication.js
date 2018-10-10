import { Router } from 'express';
import moment from 'moment';
import authenticationFail from '../jsons/authenticationFail';
import submitChangePassword from '../jsons/submitChangePassword';
import submitChangePasswordError from '../jsons/submitChangePasswordError';
import submitChangePasswordSuccess from '../jsons/submitChangePasswordSuccess';

const router = Router();

const listUser = [
  {
    userId: 'mpancs01',
    password: '1',
    name: 'Test ID One',
    isAdmin: true,
    email: 'performance_test01@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs02',
    password: '2',
    name: 'Test ID Two',
    isAdmin: true,
    email: 'performance_test02@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs03',
    password: '3',
    name: 'Test ID Three',
    isAdmin: true,
    email: 'performance_test03@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs04',
    password: '4',
    name: 'Test ID Four',
    isAdmin: true,
    email: 'performance_test04@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs05',
    password: '5',
    name: 'Test ID Five',
    isAdmin: false,
    email: 'performance_test05@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs06',
    password: '6',
    name: 'Test ID Six',
    isAdmin: false,
    email: 'performance_test06@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs07',
    password: '7',
    name: 'Test ID Seven',
    isAdmin: false,
    email: 'performance_test07@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs08',
    password: '8',
    name: 'Test ID Eight',
    isAdmin: false,
    email: 'performance_test08@ncs.com',
    orgCode: 'MPA',
  },
  {
    userId: 'mpancs09',
    password: '9',
    name: 'Test ID Nine',
    isAdmin: false,
    email: 'performance_test09@ncs.com',
    orgCode: 'MPA',
  },
];

router.post('/submitAuthentication', (req, res) => {
  const { type, userId, password } = req.body;

  if (!userId || !password || type !== '1') {
    return res.status(200).json(authenticationFail);
  }

  const user = listUser.find(u => u.userId === userId && u.password === password);

  if (!user) return res.status(200).json(authenticationFail);

  const time = moment(new Date()).format('MMM DD YYYY hh:mm A');

  return res.status(200).json({
    returnCode: 0,
    returnMessage: `Login ID ${user.userId} last system access ${time}`,
    returnPayload: {
      userId: user.userId,
      name: user.name,
      email: user.email,
      orgCode: user.orgCode,
      isAdmin: user.isAdmin,
    },
  });
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
