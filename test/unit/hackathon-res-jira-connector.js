import hackathonResJiraConnector from '../../src/hackathon-res-jira-connector';

describe('hackathonResJiraConnector', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(hackathonResJiraConnector, 'greet');
      hackathonResJiraConnector.greet();
    });

    it('should have been run once', () => {
      expect(hackathonResJiraConnector.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(hackathonResJiraConnector.greet).to.have.always.returned('hello');
    });
  });
});
