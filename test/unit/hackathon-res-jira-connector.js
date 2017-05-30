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
      spy(hackathonResJiraConnector, 'jira');
      spy(hackathonResJiraConnector, 'resources');
    });

    it.skip('should have been run once', async function() {
      const result = await hackathonResJiraConnector.jira();
      console.log(result)
      console.log('Search-Result: ' + JSON.stringify(result, null, 4));
    });

    it('should post data to resource', async function() {
      const result = await hackathonResJiraConnector.resources();
      console.log(result)
    })

  });
});
