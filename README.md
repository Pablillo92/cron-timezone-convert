# crontzconvert

crontzconvert is a JavaScript library that, given a cron expression, a source timezone and a destination timezone, transforms the cron expression for that timezone.

## Installation

First, install the module:

```
npm install crontzconvert
```

Then, depending upon your usage context, add a reference to it:

### ESM / webpack / TypeScript

```js
import { convert } from 'crontzconvert';
```

## Usage

```js
convert("0 0 8-10 * * *", "UTC", "US/Arizona");
> "0 0 1-3 * * *"

convert("0 30 23 L * *", "UTC", "Africa/Lagos");
> "0 30 0 1 * *"

convert("0 30 0 1 * *", "Africa/Lagos", "UTC");
> "0 30 23 L * *"

convert("0 30 23 * * 2,6", "Africa/Lagos", "UTC");
> "0 30 0 * * 0,3"

convert("0 0 0 1 12 *", "Africa/Lagos", "UTC");
> "0 0 23 L 11 *"

convert("0 0 0 31 12 *", "UTC", "Africa/Lagos");
> "0 0 0 1 1 *"

convert("0 0 23 30 11 *", "UTC", "Africa/Lagos");
> "0 0 0 1 12 *"
```

## License

crontzconvert is freely distributable under the terms of the [MIT license](https://github.com/Pablillo92/cron-timezone-convert/blob/main/LICENSE).
