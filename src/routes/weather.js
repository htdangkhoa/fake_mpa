import { Router } from 'express';
import YQL from 'yql';

const router = Router();

router.post('/getWeatherData', (req, res) => {
  let { latitude, longitude } = req.body;

  if (!latitude || !longitude) {
    // Defult is Marina Bay
    latitude = 1.287208;
    longitude = 103.854915;
  }

  const query = new YQL(
    `select item from weather.forecast where u='c' AND woeid in (SELECT woeid FROM geo.places WHERE text="(${latitude}, ${longitude})")`,
  );

  return query.exec((error, data) => {
    if (error) {
      return res.status(200).json({
        returnCode: 0,
        isSuccessful: false,
        returnPayload: null,
        returnMessage: error,
      });
    }

    const { forecast } = data.query.results.channel.item;

    return res.status(200).json({
      returnCode: 0,
      returnMessage: '',
      returnPayload: {
        forecastCode: parseWeatherCode(forecast[0].code).code,
        forecastDesc: parseWeatherCode(forecast[0].code).desc,
        tempLow: parseInt(forecast[0].low),
        tempHigh: parseInt(forecast[0].high),
      },
    });
  });
});

function parseWeatherCode(code) {
  switch (code) {
    case '4':
      return {
        code: 'TS',
        desc: 'Thunderstorms',
      };
    case '11':
    case '12':
      return {
        code: 'PS',
        desc: 'Showers',
      };
    case '14':
      return {
        code: 'SH',
        desc: 'Light snow showers',
      };
    case '40':
      return {
        code: 'SH',
        desc: 'Scattered showers',
      };
    case '42':
      return {
        code: 'SH',
        desc: 'Scattered snow showers',
      };
    case '45':
      return {
        code: 'SH',
        desc: 'Thundershowers',
      };
    case '46':
      return {
        code: 'SH',
        desc: 'Snow showers',
      };
    case '47':
      return {
        code: 'SH',
        desc: 'Isolated thundershowers',
      };
    case '24':
      return {
        code: 'WI',
        desc: 'Windy',
      };
    case '5':
      return {
        code: 'RA',
        desc: 'Mixed rain and snow',
      };
    case '6':
      return {
        code: 'RA',
        desc: 'Mixed rain and sleet',
      };
    case '10':
      return {
        code: 'RA',
        desc: 'Freezing rain',
      };
    case '35':
      return {
        code: 'RA',
        desc: 'Mixed rain and hail',
      };
    case '26':
    case '29':
    case '30':
    case '44':
      return {
        code: 'PC',
        desc: 'Partly cloudy',
      };
    case '33':
      return {
        code: 'FN',
        desc: 'Fair',
      };
    case '34':
      return {
        code: 'FD',
        desc: 'Fair',
      };
    case '21':
      return {
        code: 'HA',
        desc: 'Haze',
      };
    default:
      return {
        code: 'CL',
        desc: 'Cloudy',
      };
  }
}

export default router;
