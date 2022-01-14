import { getRuleset } from '@stoplight/spectral-cli/dist/services/linter/utils/getRuleset';
import { Spectral, Document } from '@stoplight/spectral-core';
import { httpAndFileResolver } from '@stoplight/spectral-ref-resolver';
import { readParsable } from '@stoplight/spectral-runtime';
import * as Parsers from '@stoplight/spectral-parsers';

export const repro = async (specificationPath: string, rulesetPath: string): Promise<boolean> => {

  const spectral = new Spectral({ resolver: httpAndFileResolver });

  const ruleset = await getRuleset(rulesetPath);

  spectral.setRuleset(ruleset);

  const document = new Document(
    await readParsable(specificationPath, { encoding: 'utf8' }),
    Parsers.Yaml,
    specificationPath,
  );

  await spectral.runWithResolved(
    document,
    {
      ignoreUnknownFormat: false,
    });

  return true;
};
