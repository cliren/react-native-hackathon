/**
 * A util library to support custom date functions.
 */
import _ from "lodash";
import moment from "moment";

// Refer to moment docs for default duration.humanize thresholds
// http://momentjs.com/docs/*/customization/relative-time-threshold/
moment.relativeTimeThreshold("s", 60);
moment.relativeTimeThreshold("m", 60);
moment.relativeTimeThreshold("h", 24);
moment.relativeTimeThreshold("d", 25);
moment.relativeTimeThreshold("M", 10);

moment.locale("en-abbreviated", {     // Define custom relative time formats
  relativeTime: {
    future: "in %s",
    past: "%s",
    s: "Just now",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
});
moment.locale("en");    // Reset to default


/**
 * Returns relative time
 * Refer to http://momentjs.com/docs/ for more on Relativetime settings
 *
 * @param pastTime Date - A JavaScript date
 * @param currentTime moment - (Optional) if passed calculates the relative from
 * that moment. Default is moment() which is now
 * @param mockPastTime moment - (Optional) only used as di for tests
 *
 * @returns String - relative time from now in the below format
 *
 * Just Now = under a minute ago
 * 1m = 1 minute, for use in 1-59 minutes
 * 1h = 1 hour, for use in 1-23 hours
 * 1d = 1 day, for use in 1-6 days
 * 1w = 1 week, for use in anything under a month
 * 15 Mar = day and month, for use or anything older than a month
 * 15 Mar 12 = anything in previous year
 */
export function fromNow(pastTime,
                        currentTime = moment(),
                        mockPastTime = null) {
  currentTime.locale("en-abbreviated");
  if (mockPastTime !== null) {
    pastTime = mockPastTime;
  } else {
    pastTime = moment(pastTime).locale("en-abbreviated");
  }

  let pastDays = currentTime.diff(pastTime, "days");
  let pastMonths = currentTime.diff(pastTime, "months");

  if (_.inRange(pastMonths, 1, 13)) { // under a year
    return currentTime.subtract(pastDays, "days").format("DD MMM");
  } else if (pastMonths > 12) { // over a year
    return currentTime.subtract(pastDays, "days").format("DD MMM YY");
  } else if (_.inRange(pastDays, 7, 28)) { // under a month
    return Math.ceil(pastDays / 7) + "w";
  } else { // under a week uses moment relative threshold configuration above
    return pastTime.fromNow();
  }
}
