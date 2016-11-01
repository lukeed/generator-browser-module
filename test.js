import path from 'path';
import test from 'ava';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';
import pify from 'pify';
import moduleName from './app/module-name';

let generator;

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('browser-module:app', ['../app'], null, {skipInstall: true});
});

test.serial('generates expected files', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com'
	});

	await pify(generator.run.bind(generator))();

	assert.file([
		'.editorconfig',
		'.git',
		'.gitattributes',
		'.gitignore',
		'.travis.yml',
		'lib/index.js',
		'docs/index.html',
		'docs/app.js',
		'package.json',
		'readme.md',
		'license',
		'test.js'
	]);
});

test('parse scoped package names', t => {
	t.is(moduleName.slugify('author/thing'), 'author-thing', 'slugify non-scoped packages');
	t.is(moduleName.slugify('@author/thing'), '@author/thing', 'accept scoped packages');
	t.is(moduleName.slugify('@author/hi/there'), 'author-hi-there', 'fall back to regular slugify if invalid scoped name');
});

test.serial('prompts for description', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		moduleDescription: 'foo',
		githubUsername: 'test',
		website: 'test.com'
	});

	await pify(generator.run.bind(generator))();

	assert.fileContent('package.json', /"description": "foo",/);
	assert.fileContent('readme.md', /> foo/);
});

test.serial('defaults to superb description', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com'
	});

	await pify(generator.run.bind(generator))();

	assert.fileContent('package.json', /"description": "My .+ module",/);
	assert.fileContent('readme.md', /> My .+ module/);
});

test.serial('disregard test suite', async () => {
	helpers.mockPrompt(generator, {
		moduleName: 'test',
		githubUsername: 'test',
		website: 'test.com',
		ava: false
	});

	await pify(generator.run.bind(generator))();

	assert.noFile('test.js');
});
