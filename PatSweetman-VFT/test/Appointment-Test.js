const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;

for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

  describe('Appointment-Test-Group', () => {
    it('should welcome customers to My Painting Company', () => {
        return send(rb.intent('AppointmentIntent'), {day: 'Monday'})
            .then((res) => {
                const matchedResponse = res.isAsk('Thank you. What is your phone number so I can text you a confirmation of the appointment?', 'What is your phone number?');
                expect(matchedResponse).to.equal(true);
            })
    })

    // Add more it's for this group here
  })

}
