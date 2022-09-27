import mockjs from 'mockjs';

export default {
  'GET /circulating_supply/network_locked_fil_breakdown': (
    req: any,
    res: any,
  ) => {
    res.json(
      mockjs.mock({
        status: 200,
        'data|60': [
          {
            stat_date: `@date('yyyy-MM-dd')`,
            total_initial_pledge: `@float(62164, 51178742, 3)`,
            total_locked_funds: `@float(62164, 51178742, 3)`,
            new_initial_pledge: `@float(62164, 51178742, 3)`,
            new_reward_locked: `@float(62164, 51178742, 3)`,
            new_reward_released: `@float(62164, 51178742, 3)`,
          },
        ],
      }),
    );
  },
};
