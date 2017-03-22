var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    language: 'en',
    timeFormat: 12,
    units: 'metric',
 
    modules: [
        {
            module: 'alert'
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: 'clock',
            position: 'top_left',  
            config: {
                timeFormat: '12',
                showPeriodUpper: true,
                clockBold: true,
                displayType: 'both'
            }
        },
 
        {
            module: 'calendar',
            header: 'US Holidays',
            position: 'top_left',
            config: {
                calendars: [
                    {
                        symbol: 'calendar-check-o ',
                        url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
                    }
                ]
            }
        },
 
        {
            module: 'compliments',
            position: 'lower_third',  
         
            config: {
                compliments: {
                    morning: ['Good morning.','Enjoy your day!'],
                    afternoon: ['Hello','Good Afternoon'],
                    evening: ['Good Evening','Good Night','Bye Bye']
                }
            }
        },
 
        {
            module: 'currentweather',
            position: 'top_right',
            config: {
                location: 'Des Moines, United States',
                locationID: '4853828',
                appid:'fad1c025e735d2e014322bbb647c3d8b',
                showHumidity: true,
                units: 'imperial'
            }
        },
 
        {
            module: 'weatherforecast',
            position: 'top_right',
            header: 'Weather Forecast',
            config: {
            location: 'Des Moines, United States',
            locationID: '4853828',
            appid:'fad1c025e735d2e014322bbb647c3d8b',
            units: 'imperial'
            }
        },
 
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },

        {
            module: 'custommoduleworld',
            position: 'middle_center', // This can be any of the regions.
            config: {
                // See 'Configuration options' for more information.
                text: 'Hello world!'
            }
        },

        {
            module: 'iFrame',
            position: 'top_right', // bottom_bar 
            config: {
                    url: "https://goo.gl/RQwAMG", // https://goo.gl/rBTJ95
                    width: "100%",
                    height: "400px",
                }
        },

        {
            module: 'logomodule',
            position: 'top_left',
            config: {
            }
        },

        {
            module: 'rain',
            position: 'fullscreen_above',
            config: {
                dropCount: 200
            }
        },        
    ]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}