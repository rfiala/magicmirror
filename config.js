/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
/*		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},*/
        {
            module: 'netatmo',
            position: 'top_right', // the location where the module should be displayed
            config: {
                design: 'bubbles',
                hideLoadTimer: true,
                showRadio: false,
                updateInterval: 10,
                showWiFi: false,
                moduleOrder: ["Außen"],
                clientId: '5c2b79250b04dcb2a58ffa3e', // your app id
                clientSecret: 'VESTvKVlrzc0W7yavwQN0rOsI', // your app secret
                refreshToken: '57bf4da32baa3c0a6f8b45cf|d7058e2ded73719fa827b1652c6e7039' // your generated refresh token
            }
        },
        {
            module: "MMM-PublicTransportBerlin",
            position: "top_left",
            config: {
                name: "Abfahrten BUS",
                stationId: "900000220744",
                hidden: false,
                ignoredStations: [900000220741,900000220743,900000220742,900000220740],
                directionStationId: "900000220743",
                travelTimeToStation: 5,
                interval: 120000,
                departureMinutes: 90,
                maxDepartures: 8,
                marqueeLongDirections: true,
                showColoredLineSymbols: true,
                useColorForRealtimeInfo: true,
                showTableHeaders: true,
                showTableHeadersAsSymbols: true,
                maxUnreachableDepartures: 2,
                maxReachableDepartures: 5,
                fadeUnreachableDepartures: true,
                fadeReachableDepartures: true,
                fadePointForReachableDepartures: 0.25,
                excludeDelayFromTimeLabel: true
            }
        },
        {
            module: "MMM-PublicTransportBerlin",
            position: "top_left",
            config: {
                name: "Abfahrten RE",
                stationId: "900000220006",
                hidden: false,
                ignoredStations: [900000220741,900000220743,900000220742,900000220740],
                directionStationId: "900000220008",
                travelTimeToStation: 5,
                interval: 120000,
                departureMinutes: 90,
                maxDepartures: 8,
                marqueeLongDirections: true,
                showColoredLineSymbols: true,
                useColorForRealtimeInfo: true,
                showTableHeaders: true,
                showTableHeadersAsSymbols: true,
                maxUnreachableDepartures: 2,
                maxReachableDepartures: 5,
                fadeUnreachableDepartures: true,
                fadeReachableDepartures: true,
                fadePointForReachableDepartures: 0.25,
                excludeDelayFromTimeLabel: true
            }
        },

        {
			module: "compliments",
			position: "bottom_center"
		}/*,
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from https://openweathermap.org/city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Spiegel News",
						url: "http://www.spiegel.de/schlagzeilen/tops/index.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		}*/
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
