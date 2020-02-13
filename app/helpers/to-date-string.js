import { helper } from '@ember/component/helper';

export function toDateString(params/*, hash*/) {
  let date = new Date(Number(params[0]));
  let month = date.getUTCMonth() + 1; // months from 1-12
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  let newdate = `${day  } / ${  month  } / ${  year}`;
  return newdate;
}

export default helper(toDateString);
