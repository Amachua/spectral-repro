import { repro } from '../nimma-issue';
import path from 'path';

test('Nimma Issue', async (): Promise<void> => {
  const specificationPath = path.resolve(__dirname, `../../specifications/specification.yaml`);
  const rulesetPath = path.resolve(__dirname, `../../rules/rules.yaml`);
  const capturedLog = await repro(specificationPath, rulesetPath);

  expect(capturedLog).toBe(true);
});

