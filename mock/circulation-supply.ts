import mockjs from 'mockjs';

export default {
  'GET /circulating_supply/circulating_supply': (req: any, res: any) => {
    res.json(
      mockjs.mock({
        status: 200,
        'data|60': [
          {
            stat_date: `@date('yyyy-MM-dd')`,
            circulating_fil: `@float(62164, 51178742, 3)`,
            mined_fil: `@float(62164, 51178742, 3)`,
            vested_fil: `@float(62164, 51178742, 3)`,
            reserve_disbursed_fil: `@float(62164, 51178742, 3)`,
            locked_fil: `@float(62164, 51178742, 3)`,
            burnt_fil: `@float(62164, 51178742, 3)`,
          },
        ],
      }),
    );
  },
};
