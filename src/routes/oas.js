import { Router } from 'express';
import { isArray } from 'lodash';
import moment from 'moment';
import oasAppointmentList from '../jsons/oasAppointmentList';
import oasAppointmentDetails from '../jsons/oasAppointmentDetails';
import timeSlotsList from '../jsons/timeSlotsList';
import customerInfo from '../jsons/customerInfo';

const router = Router();

const millisToDateString = timestamp => moment(timestamp).format('DD MMM YYYY');
const millisToTimeString = timestamp => moment(timestamp).format('hh:mm A');

router.post('/getOasAppointmentList', (req, res) => res.status(200).json(oasAppointmentList));

router.post('/getOasAppointmentDetails', (req, res) => {
  const { refNum } = req.body;

  if (refNum === 'HUC20170329004') return res.status(200).json(oasAppointmentDetails);

  return res.status(400).json(global.errors);
});

router.post('/getOasAppointmentListIncludingWalkIn', (req, res) => {
  const sampleNowUtc = new Date().getTime();
  const sampleLate = sampleNowUtc - 60 * 1000;
  const sampleInAnHour = sampleNowUtc + 10 * 60 * 1000;
  const sampleToday = sampleNowUtc + 2 * 3600 * 1000;
  const sampleNextDay = sampleNowUtc + 2 * 24 * 3600 * 1000;

  const app1 = {
    refNum: 'MUL20151016001',
    apptDateTimeInMillis: sampleLate,
    apptDateString: millisToDateString(sampleLate),
    apptTimeString: millisToTimeString(sampleLate),
    transTypeOthers: 'other trans type',
    transGroupList: [
      {
        id: 1,
        name: 'Harbour Craft',
        transactionTypeList: [
          {
            id: 2,
            name: 'Application to de-licence',
            quantity: 1,
            prefix: 'HAD',
          },
          {
            id: 6,
            name: 'Return of HARTS',
            quantity: 2,
            prefix: 'HRH',
          },
        ],
      },
    ],
    queueNum: '001',
    urgencyStatusCode: 1,
  };

  const app2 = {
    refNum: 'MUL20151016004',
    apptDateTimeInMillis: sampleInAnHour,
    apptDateString: millisToDateString(sampleInAnHour),
    apptTimeString: millisToTimeString(sampleInAnHour),
    transTypeOthers: '',
    transGroupList: [
      {
        id: 1,
        name: 'Harbour Craft',
        transactionTypeList: [
          {
            id: 3,
            name: 'Update of craft particulars',
            quantity: 1,
            prefix: 'HUC',
          },
          {
            id: 6,
            name: 'Return of HARTS',
            quantity: 2,
            prefix: 'HRH',
          },
        ],
      },
      {
        id: 2,
        name: 'Pleasure Craft',
        transactionTypeList: [
          {
            id: 14,
            name: 'Change of Ownership',
            quantity: 1,
            prefix: 'PCO',
          },
        ],
      },
      {
        id: 3,
        name: 'Port Clearance',
        transactionTypeList: [
          {
            id: 11,
            name: 'General Declaration',
            quantity: 3,
            prefix: 'CGD',
          },
        ],
      },
    ],
    queueNum: '003',
    urgencyStatusCode: 2,
  };

  const app3 = {
    refNum: 'MUL20151016006',
    apptDateTimeInMillis: sampleToday,
    apptDateString: millisToDateString(sampleToday),
    apptTimeString: millisToTimeString(sampleToday),
    transTypeOthers: 'other trans type',
    transGroupList: [
      {
        id: 2,
        name: 'Pleasure Craft',
        transactionTypeList: [
          {
            id: 7,
            name: 'New / Renewal of licence',
            quantity: 1,
            prefix: 'PNL',
          },
          {
            id: 10,
            name: 'New / Renewal of PPCDL or APPCDL',
            quantity: 1,
            prefix: 'PNP',
          },
        ],
      },
      {
        id: 3,
        name: 'Port Clearance',
        transactionTypeList: [
          {
            id: 12,
            name: 'Application for launching permit',
            quantity: 3,
            prefix: 'CAL',
          },
        ],
      },
    ],
    queueNum: '010',
    urgencyStatusCode: 3,
  };

  const app4 = {
    refNum: 'OTH20151016007',
    apptDateTimeInMillis: sampleNextDay,
    apptDateString: millisToDateString(sampleNextDay),
    apptTimeString: millisToTimeString(sampleNextDay),
    transTypeOthers: 'other trans type',
    transGroupList: [],
    queueNum: '020',
    urgencyStatusCode: 4,
  };

  res.json({
    returnCode: 0,
    returnMessage: 'success',
    returnPayload: {
      apptList: [app1, app2, app3, app4],
      walkInQNum: '024',
    },
  });
});

router.post('/checkInOasAppointment', (req, res) => {
  res.json({
    returnCode: 0,
    returnMessage: 'success',
    returnPayload: {
      queueNum: '045',
      currentlyServingQNum: '005',
      urgencyStatusCode: 1,
    },
  });
});

router.post('/checkQStatus', (req, res) => {
  res.json({
    returnCode: 0,
    returnMessage: 'success',
    returnPayload: {
      currentlyServingQNum: '005',
      urgencyStatusCode: 1,
    },
  });
});

router.post('/getTimeSlotsList', (req, res) => {
  const {
    userId, orgCode, apptType, transTypeOthers, transGroupList,
  } = req.body;

  if (userId === 'mpancs06' && orgCode === 'MPA' && apptType === '4') {
    return res.status(200).json({
      returnCode: 0,
      returnMessage: 'success',
      returnPayload: timeSlotsList,
    });
  }

  return res.status(400).json(global.errors);
});

router.post('/getCustomerInfo', (req, res) => {
  const { userId, orgCode } = req.body;

  if (userId === 'mpancs04' && orgCode === 'MPA') {
    return res.status(200).json(customerInfo);
  }

  return res.status(400).json(global.errors);
});

router.post('/validateCraftNumbers', (req, res) => {
  const listValid = ['SB 0715B', 'SB 0765I', 'SB 0394G'];

  const { craftNumbers } = req.body;

  if (!isArray(craftNumbers)) return res.json(global.errors);

  let msg = '';

  let countDuplicates = 0;

  for (let i = 0; i <= craftNumbers.length; i += 1) {
    for (let j = i; j <= craftNumbers.length; j += 1) {
      if (i !== j && craftNumbers[i] === craftNumbers[j]) {
        countDuplicates += 1;
      }
    }
  }

  for (let i = 0; i < craftNumbers.length; i += 1) {
    const craft = craftNumbers[i];

    if (listValid.indexOf(craft) === -1) msg += 'Please enter a valid Craft Number<br/>';
  }

  if (countDuplicates !== 0) {
    for (let i = 0; i < countDuplicates; i += 1) {
      msg += 'Please enter a non-duplicate Craft Number<br/>';
    }
  }

  return res.json({
    returnCode: 0,
    isSuccessful: msg === '',
    returnPayload: null,
    returnMessage: msg,
  });
});

export default router;
