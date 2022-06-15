import { repro } from '../ruleset-issue';
import path from 'path';

test('Ruleset Issue', async (): Promise<void> => {
  const specificationPath = path.resolve(__dirname, `../../specifications/specification.yaml`);
  const rulesetPath = path.resolve(__dirname, `../../rules/_style.yaml`);
  const capturedLog = await repro(specificationPath, rulesetPath);

  expect(capturedLog).toBe(true);
});

