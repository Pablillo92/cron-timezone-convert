import { convert } from './convert';

describe('test', () => {
  const cases: [string, string, string, string, string][] = [
    [
      'Cron "0 0 8-10 * * *" UTC to US/Arizona (daily)',
      '0 0 8-10 * * *',
      'UTC',
      'US/Arizona',
      '0 0 1-3 * * *',
    ],
    [
      'Cron "0 0 1-3 * * *" US/Arizona to UTC (daily)',
      '0 0 1-3 * * *',
      'US/Arizona',
      'UTC',
      '0 0 8-10 * * *',
    ],
    [
      'Cron "0 30 23 L * *" UTC to Africa/Lagos (monthly)',
      '0 30 23 L * *',
      'UTC',
      'Africa/Lagos',
      '0 30 0 1 * *',
    ],
    [
      'Cron "0 30 0 1 * *" Africa/Lagos to UTC (monthly)',
      '0 30 0 1 * *',
      'Africa/Lagos',
      'UTC',
      '0 30 23 L * *',
    ],
    [
      'Cron "0 30 23 * * 2,6" UTC to Africa/Lagos (weekly)',
      '0 30 23 * * 2,6',
      'UTC',
      'Africa/Lagos',
      '0 30 0 * * 0,3',
    ],
    [
      'Cron "0 30 0 * * 0,3" Africa/Lagos to UTC (weekly)',
      '0 30 0 * * 0,3',
      'Africa/Lagos',
      'UTC',
      '0 30 23 * * 2,6',
    ],
    [
      'Cron "0 0 0 1 12 *" UTC to Africa/Lagos (yearly)',
      '0 0 0 1 12 *',
      'Africa/Lagos',
      'UTC',
      '0 0 23 L 11 *',
    ],
    [
      'Cron "0 0 0 2 12 *" UTC to Africa/Lagos (yearly)',
      '0 0 0 2 12 *',
      'Africa/Lagos',
      'UTC',
      '0 0 23 1 12 *',
    ],
    [
      'Cron "0 0 0 31 12 *" UTC to Africa/Lagos (yearly)',
      '0 0 23 31 12 *',
      'UTC',
      'Africa/Lagos',
      '0 0 0 1 1 *',
    ],
    [
      'Cron "0 0 23 30 11 *" UTC to Africa/Lagos (yearly)',
      '0 0 23 30 11 *',
      'UTC',
      'Africa/Lagos',
      '0 0 0 1 12 *',
    ],
    [
      'Cron "0 0 23 30 11 *" UTC to Africa/Lagos (second)',
      '30-45 * * * * *',
      'UTC',
      'Africa/Lagos',
      '30-45 * * * * *',
    ],
  ];

  it.each(cases)('%s', (_title, cron, timezone1, timezone2, expected) => {
    expect(convert(cron, timezone1, timezone2)).toEqual(expected);
  });
});
