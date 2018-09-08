const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;

for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

  describe('Launch-Test-Group', () => {
    it('should welcome customers to My Painting Company', () => {
        return send(rb.intent('LAUNCH'))
            .then((res) => {
                const matchedResponse = res.isAsk('Welcome to my Painting Business. When would you like to schedule an appointment?', 'When would you like to schedule an appointment?');
                expect(matchedResponse).to.equal(true);
            })
    })

    // Add more it's for this group here
  })

}
