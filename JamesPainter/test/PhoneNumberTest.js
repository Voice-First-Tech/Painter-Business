const expect = require('chai').expect;
const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;
for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

    // Add tests
    describe('GROUP', () => {
    it('should ...', () => {
        return send(rb.intent('PhoneNumber'))
            .then((res) => {
                const matchedResponse = res.isAsk('Please Give me anumber.');
                expect(matchedResponse).to.equal(true);
            })
    })

    // Add more it's for this group here
})

}
