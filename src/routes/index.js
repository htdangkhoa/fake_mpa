import express from 'express';

const router = express.Router();

router.get('/getTermList', (req, res) => {
  res.json({
    returnCode: 1,
    returnPayload: [
      {
        applicationType: null,
        cargoLocation: 'TEST11 AT TEST LOCATION11',
        companyName: 'TEST CHEVRCN SINGAPORE-NEW',
        mpaRefNo: 'TP17040002',
        refNo: '150007',
        status: 'APPROVED',
        submissionDate: '09/03/18 10:15',
      },
    ],
    success: true,
    returnMessage: 'success',
  });
});

router.get('/getTermDetail', (req, res) => {
  res.json({
    returnCode: 1,
    returnPayload: {
      applicantName: 'MAR1',
      applicationLetter: 'ASI-RO-MODIFY.PDF',
      cargoDetails: [
        {
          cargoDesc: '11',
          cargoTonnage: '11',
        },
        {
          cargoDesc: '22',
          cargoTonnage: '22',
        },
        {
          cargoDesc: '33',
          cargoTonnage: '33',
        },
      ],
      cargoLocation: 'TEST11 AT TEST LOCATION11',
      companyBlock: ' 111111111',
      companyBlockHouseNO: ' 111111111/#25-00',
      companyHouse: '#25-00',
      companyName: 'TEST CHEVRCN SINGAPORE-NEW',
      companyPostalCode: '048622',
      companyRoadName1: '30 PAFFLES PLACE',
      companyRoadName2: 'CHEWRON HOUSE',
      contactPerson: 'YANYANGHONG',
      contactPerson2: 'YANJINYU',
      corresBlock: ' 111111111',
      corresBlockHouseNO: ' 111111111/#25-00',
      corresHouse: '#25-00',
      corresPostalCode: '048622',
      corresRoadName1: '30 PAFFLES PLACE',
      corresRoadName2: 'CHEWRON HOUSE',
      customsLetter: 'CUSTOMSLETTER.PDF',
      emailAddress: ' ',
      emailAddress2: ' ',
      faxNo: ' ',
      leaseAttachName: 'HOD.PDF',
      leaseDate: '01/01/2018 - 31/12/2018',
      leaseEndDate: '31/12/2018',
      leaseStartDate: '01/01/2018',
      mobileNo: ' ',
      mobileNo2: ' ',
      mpaAccount: '06058A',
      mpaRefNo: 'TP17040002',
      notificationMethod: 'NOT REQUIRED',
      officeTel: '67564921',
      operationBlock: ' 111111111',
      operationBlockHouseNO: ' 111111111/#25-00',
      operationDate: '01/01/2018 - 31/12/2018',
      operationHouse: '#25-00',
      operationLocation: 'TEST11 AT TEST LOCATION11',
      operationPostalCode: '048622',
      operationRoadName1: '30 PAFFLES PLACE',
      operationRoadName2: 'CHEWRON HOUSE',
      oprEndDate: '31/12/2018',
      oprStartDate: '01/01/2018',
      otherDocument: 'APPLICATIONLETTER.PDF',
      refNo: '150007',
      returnRsn: null,
      returnRsnBo: false,
      status: 'APPROVED',
      submissionDate: '09/03/2018 10:15',
      vessels: null,
    },
    success: true,
    returnMessage: 'success',
  });
});

export default router;
