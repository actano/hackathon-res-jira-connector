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
      spy(hackathonResJiraConnector, 'put');
    });

    it.skip('should have been run once', async function() {
      const result = await hackathonResJiraConnector.greet();
      console.log(result)
      console.log('Search-Result: ' + JSON.stringify(result, null, 4));
    });

    it('should post data to resource', async function() {
      const result = await hackathonResJiraConnector.put();
      console.log(result)
    })

  });
});
