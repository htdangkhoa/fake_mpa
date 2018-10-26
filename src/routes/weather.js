import { Router } from 'express';
import YQL from 'yql';

const router = Router();

router.post('/getWeatherData', (req, res) => {
  const { latitude, longitude } = req.body;

  if (!latitude || !longitude) return res.status(400).json(global.errors);

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
        forecastCode: 'TS',
        forecastDesc: forecast[0].text,
        tempLow: parseInt(forecast[0].low),
        tempHigh: parseInt(forecast[0].high),
      },
    });
  });
});

export default router;
