'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.ask('Welcome to my Painting Business. When would you like to schedule an appointment?', 'When would you like to schedule an appointment?');
    },

    'AppointmentIntent': function(day) {
        this.ask('Thank you. What is your phone number so I can text you a confirmation of the appointment?', 'What is your phone number?');
    },

    'PhoneNumberIntent': function(number) {
        this.tell('Thank you. We have you scheduled for an appointment');
    },

    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name.value + ', nice to meet you!');
    },
});

module.exports.app = app;
