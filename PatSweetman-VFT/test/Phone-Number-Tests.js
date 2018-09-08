const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;

for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

  describe('Phone-Number-Test-Group', () => {
    it('should thank customer and confirm appointment', () => {
        return send(rb.intent('PhoneNumberIntent'), {number: '5138757463'})
            .then((res) => {
                const matchedResponse = res.isTell('Thank you. We have you scheduled for an appointment');
                expect(matchedResponse).to.equal(true);
            })
    })

    // Add more it's for this group here
  })

}
