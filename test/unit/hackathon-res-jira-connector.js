import hackathonResJiraConnector from '../../src/hackathon-res-jira-connector';

var mochaAsync = (fn) => {
  return async(done) => {
    try {
      await fn();
      done();
    } catch (err) {
      done(err);
    }
  };
};

describe('hackathonResJiraConnector', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(hackathonResJiraConnector, 'greet');
      hackathonResJiraConnector.greet();
    });

    it('should have been run once', async function(done) {
      const result = await hackathonResJiraConnector.greet();
      console.log(result);
      done()
    });

  });
});
