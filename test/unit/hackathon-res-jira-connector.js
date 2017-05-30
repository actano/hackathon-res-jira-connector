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
  describe('Import To Resources', () => {
    beforeEach(() => {
      spy(hackathonResJiraConnector, 'jira');
    });

    it('should have been run once', async function() {
      const result = await hackathonResJiraConnector.jira();
      console.log('Search-Result: ' + JSON.stringify(result, null, 4));
    });
  });
});
